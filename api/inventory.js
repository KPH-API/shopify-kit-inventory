import axios from "axios";

const SHOP = process.env.SHOPIFY_SHOP;
const TOKEN = process.env.SHOPIFY_TOKEN;

const kits = {
  "KIT-A": [
    { sku: "PART-1", qty: 1 },
    { sku: "PART-2", qty: 2 }
  ]
};

export default async function handler(req, res) {

  try {

    const body = req.body;

    const sku = body.sku;
    const oldQty = Number(body.old_quantity);
    const newQty = Number(body.new_quantity);
    const locationId = body.location_id;

    const increase = newQty - oldQty;

    if (increase <= 0) {
      return res.status(200).send("No increase");
    }

    const components = kits[sku];

    if (!components) {
      return res.status(200).send("No kit config");
    }

    for (const component of components) {

      const inventoryItemId =
        await getInventoryItemIdBySku(component.sku);

      const decrease = component.qty * increase;

      await adjustInventory(
        inventoryItemId,
        locationId,
        -decrease
      );
    }

    return res.status(200).send("Success");

  } catch (err) {

    console.error(err);

    return res.status(500).send("Error");
  }
}

async function getInventoryItemIdBySku(sku) {

  const query = `
    query {
      productVariants(first: 1, query: "sku:${sku}") {
        edges {
          node {
            inventoryItem {
              id
            }
          }
        }
      }
    }
  `;

  const response = await shopify(query);

  return response.data.data
    .productVariants
    .edges[0]
    .node
    .inventoryItem
    .id;
}

async function adjustInventory(
  inventoryItemId,
  locationId,
  delta
) {

  const mutation = `
    mutation inventoryAdjustQuantities(
      $input: InventoryAdjustQuantitiesInput!
    ) {
      inventoryAdjustQuantities(input: $input) {
        userErrors {
          field
          message
        }
      }
    }
  `;

  await shopify(mutation, {
    input: {
      reason: "correction",
      name: "available",
      changes: [
        {
          inventoryItemId,
          locationId,
          delta
        }
      ]
    }
  });
}

async function shopify(query, variables = {}) {

  return axios.post(
    `https://${SHOP}/admin/api/2025-01/graphql.json`,
    {
      query,
      variables
    },
    {
      headers: {
        "X-Shopify-Access-Token": TOKEN,
        "Content-Type": "application/json"
      }
    }
  );
}