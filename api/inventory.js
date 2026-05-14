import axios from "axios";

const SHOP = process.env.SHOPIFY_SHOP;
const TOKEN = process.env.SHOPIFY_TOKEN;

  // Voorbeeld
  // "A-A-1": [
  //   { sku: "C-A-1", qty: 1 },
  //   { sku: "C-A-2", qty: 1 }
  // ]

  // Na verandering volgende codes in VS code terminal
  // git add .
  // git commit -m "update kits"
  // git push

const kit = {
  "C-D-7-2": [
    { sku: "C-B-5-11", qty: 24 },
    { sku: "C-B-6-9", qty: 18 },
    { sku: "C-B-7-6", qty: 6 },
    { sku: "C-B-7-10", qty: 24 }
  ],

  "C-A-9-6": [
    { sku: "C-A-9-1", qty: 1 },
    { sku: "C-A-9-2", qty: 1 },
    { sku: "C-A-9-3", qty: 1 },
    { sku: "C-A-9-4", qty: 1 },
    { sku: "C-A-9-5", qty: 1 },
    { sku: "C-A-9-7", qty: 2 },
    { sku: "C-E-6-4", qty: 2 }
  ],

  "C-E-4-7": [
    { sku: "C-E-4-6", qty: 4 }
  ],

  "C-C-4-4": [
    { sku: "C-B-7-2", qty: 2 },
    { sku: "C-B-7-4", qty: 2 }
  ],

  "C-C-4-5": [
    { sku: "C-B-7-1", qty: 2 },
    { sku: "C-D-8-1", qty: 2 }
  ],

  "C-F-9-1": [
    { sku: "C-A-5-6", qty: 3 }
  ],

  "C-F-9-2": [
    { sku: "C-A-5-6", qty: 4 }
  ],

  "C-F-9-3": [
    { sku: "C-A-5-6", qty: 4 }
  ],

  "C-F-8-9": [
    { sku: "C-F-7-8", qty: 1 },
    { sku: "C-F-7-9", qty: 1 },
    { sku: "C-F-7-7", qty: 1 },
    { sku: "C-F-7-5", qty: 1 },
    { sku: "C-F-7-6", qty: 1 },
    { sku: "C-F-4-5", qty: 2 },
    { sku: "C-F-4-3", qty: 1 },
    { sku: "C-F-4-4", qty: 1 },
    { sku: "C-F-4-8", qty: 1 },
    { sku: "C-F-4-7", qty: 1 },
    { sku: "C-E-6-4", qty: 1 },
    { sku: "C-E-6-3", qty: 1 },
    { sku: "C-E-4-3", qty: 1 }
  ],

  "E-C-2": [
    { sku: "C-D-3", qty: 1 },
    { sku: "C-E-3-7", qty: 4 },
    { sku: "C-C-2-2", qty: 1 },
    { sku: "E-A-4", qty: 1 },
    { sku: "D-B-4-2", qty: 1 },
    { sku: "D-B-3-2", qty: 1 },
    { sku: "D-A-1-2", qty: 1 },
    { sku: "C-B-8-5", qty: 5 }
  ],

  "C-D-5-2": [
    { sku: "D-B-1-1", qty: 4 },
    { sku: "D-A-1-1", qty: 4 },
    { sku: "C-A-4-2", qty: 4 },
    { sku: "C-A-4-3", qty: 4 }
  ],

  "C-D-6-1": [
    { sku: "C-A-2", qty: 1 },
    { sku: "D-G-5-8", qty: 1 },
    { sku: "C-E-3-1", qty: 1 },
    { sku: "C-E-3-2", qty: 1 },
    { sku: "C-A-5-4", qty: 3 },
    { sku: "C-A-9-11", qty: 3 },
    { sku: "D-G-5-7", qty: 1 },
    { sku: "C-F-1-1-1", qty: 1 }
  ],

  "C-D-6-3": [
    { sku: "C-E-5-5", qty: 1 },
    { sku: "C-E-5-4", qty: 1 },
    { sku: "D-C-5-2", qty: 1 },
    { sku: "C-E-5-3", qty: 1 },
    { sku: "C-A-9-1", qty: 1 },
    { sku: "C-E-5-6", qty: 1 },
    { sku: "C-A-9-4", qty: 1 },
    { sku: "C-G-3-11", qty: 1 },
    { sku: "C-E-5-1", qty: 1 },
    { sku: "C-E-5-2", qty: 1 }
  ],

    "C-D-6-2": [
    { sku: "C-E-5-5", qty: 1 },
    { sku: "C-E-5-4", qty: 1 },
    { sku: "D-C-5-1", qty: 1 },
    { sku: "C-E-5-3", qty: 1 },
    { sku: "C-A-9-1", qty: 1 },
    { sku: "C-E-5-6", qty: 1 },
    { sku: "C-A-9-4", qty: 1 },
    { sku: "C-G-3-11", qty: 1 },
    { sku: "C-E-5-1", qty: 1 },
    { sku: "C-E-5-2", qty: 1 }
  ],

    "C-B-8-1": [
    { sku: "C-F-7-5", qty: 1 },
    { sku: "C-F-7-8", qty: 1 },
    { sku: "C-F-7-7", qty: 1 },
    { sku: "C-F-7-6", qty: 1 },
    { sku: "C-F-7-9", qty: 1 },
    { sku: "C-E-4-3", qty: 1 },
    { sku: "C-E-6-4", qty: 1 },
    { sku: "C-E-6-3", qty: 1 }
  ],

    "D-G-5-1": [
    { sku: "D-G-5-3", qty: 1 },
    { sku: "D-G-5-2", qty: 1 },
    { sku: "C-F-1-1-2", qty: 1 },
    { sku: "D-G-5-4", qty: 1 },
    { sku: "D-G-5-5", qty: 1 }
  ],

    "C-D-5-3": [
    { sku: "D-B-6-1", qty: 4 },
    { sku: "C-E-5-8", qty: 4 },
    { sku: "C-A-4-2", qty: 4 }
  ],

    "C-B-8-8": [
    { sku: "C-B-8-10", qty: 21 },
    { sku: "C-A-5-2", qty: 21 }
  ],

    "C-B-8-7": [
    { sku: "C-B-8-10", qty: 21 }
  ],

    "C-A-8-7": [
    { sku: "C-B-8-9", qty: 18 },
    { sku: "C-A-5-1", qty: 18 }
  ],

    "C-A-8-6": [
    { sku: "C-B-8-9", qty: 18 }
  ],

    "C-A-8-11": [
    { sku: "C-B-8-9", qty: 22 },
    { sku: "C-A-5-1", qty: 22 }
  ],

    "C-A-8-10": [
    { sku: "C-B-8-9", qty: 22 }
  ],

    "C-B-10-3": [
    { sku: "D-A-5-1", qty: 1 },
    { sku: "D-C-3-1", qty: 1 },
    { sku: "D-A-5-2", qty: 1 },
    { sku: "C-A-5-2", qty: 21 }
  ],

    "C-B-10-2": [
    { sku: "D-A-3-2", qty: 1 },
    { sku: "D-A-4-1", qty: 1 },
    { sku: "D-A-4-2", qty: 1 },
    { sku: "D-A-5-2", qty: 1 },
    { sku: "C-A-5-3", qty: 2 },
    { sku: "C-A-5-1", qty: 22 }
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

    const components = kit[sku];

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

  return res.status(500).send(err.message || "Unknown error");
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

  const response = await shopify(mutation, {
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

  const errors =
    response.data.data.inventoryAdjustQuantities.userErrors;

  if (errors.length) {
    throw new Error(
      errors.map(e => e.message).join(", ")
    );
  }
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