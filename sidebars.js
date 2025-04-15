module.exports = {
  docs: [
    'MyCompany', 
    'Development', 
    {
      type: 'category',
      label: 'Installation',
      link: {type: 'doc', id: 'Installation'},
      items: [
        'MyCompany_migration_to_another_server', 
        'Docker',
      ]
    },
    {
      type: 'category',
      label: 'Administration',
      link: {type: 'doc', id: 'Administration'},
      items: [
        'User_roles', 
        'Role_permissions',
      ]
    },
    'Data_upload', 
    {
      type: 'category',
      label: 'General settings and master data',
      link: {type: 'doc', id: 'General_settings_and_master_data'},
      items: [
        'Numerators', 
        'Partners_directory', 
        'Categories', 
        'Units_of_measure', 
        'Items_directory', 
        'Attributes', 
        'Employees_directory', 
        'Contracts_directory', 
      ]
    },
    {
      type: 'category',
      label: 'Sales',
      link: {type: 'doc', id: 'Sales'},
      items: [
        {
          type: 'category',
          label: 'Pricelists',
          link: {type: 'doc', id: 'Pricelists'},
          items: [
            'Pricelist_types', 
          ]
        },
        'Discount_settings', 
        'Customer_order_types', 
        'Price_type_settings', 
      ]
    },
    {
      type: 'category',
      label: 'Invoicing',
      link: {type: 'doc', id: 'Invoicing'},
      items: [
        {
          type: 'category',
          label: 'Settings',
          link: {type: 'doc', id: 'Settings'},
          items: [
            'Bill_type', 
            'Invoice_type', 
            'Payment_type', 
          ]
        },
        {
          type: 'category',
          label: 'Reporting',
          link: {type: 'doc', id: 'Reporting'},
          items: [
            'Payments', 
            'Invoices_report', 
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Purchase',
      link: {type: 'doc', id: 'Purchase'},
      items: [
        'Purchase_order_type', 
        'Vendor_pricelists', 
      ]
    },
    {
      type: 'category',
      label: 'Inventory',
      link: {type: 'doc', id: 'Inventory'},
      items: [
        'Location_settings', 
        'Shipment_type', 
        'Receipt_type', 
      ]
    },
    {
      type: 'category',
      label: 'Manufacturing',
      link: {type: 'doc', id: 'Manufacturing'},
      items: [
        'Manufacturing_order_type', 
      ]
    },
    {
      type: 'category',
      label: 'Wholesale',
      link: {type: 'doc', id: 'Wholesale'},
      items: [
        {
          type: 'category',
          label: 'Purchasing',
          link: {type: 'doc', id: 'Purchasing'},
          items: [
            'Puchase_order', 
            {
              type: 'category',
              label: 'Receipts',
              link: {type: 'doc', id: 'Receipts'},
              items: [
                'Multiple_receipts', 
              ]
            },
            'Vendor_payments', 
            'Purchase_order_cancellation', 
          ]
        },
        {
          type: 'category',
          label: 'Sale of goods',
          link: {type: 'doc', id: 'Sale_of_goods'},
          items: [
            'Customer_orders', 
            'Shipments', 
            'Customer_invoice_and_Payment_collection', 
            {
              type: 'category',
              label: 'Cross-docking',
              link: {type: 'doc', id: 'Cross-docking'},
              items: [
                'Cross-docking_settings', 
                'Cross-docking_orders', 
              ]
            },
          ]
        },
        'Adjustments', 
      ]
    },
    {
      type: 'category',
      label: 'Retail',
      link: {type: 'doc', id: 'Retail'},
      items: [
        {
          type: 'category',
          label: 'General settings',
          link: {type: 'doc', id: 'General_settings'},
          items: [
            'Cash_registers', 
            'Discount_cards', 
          ]
        },
        {
          type: 'category',
          label: 'POS',
          link: {type: 'doc', id: 'POS'},
          items: [
            'Customer_order_paid_on_POS', 
            'Returns', 
          ]
        },
        'Printing_price_tags_and_pricelists', 
        'Printing_labels', 
      ]
    },
    {
      type: 'category',
      label: 'Manufacturing management',
      link: {type: 'doc', id: 'Manufacturing_management'},
      items: [
        {
          type: 'category',
          label: 'Bills of Materials',
          link: {type: 'doc', id: 'Bills_of_Materials'},
          items: [
            'Cost_of_BoM', 
          ]
        },
        'Manufacturing_order', 
        'Unbuild_order', 
        'Byproducts', 
        'Auto_created_manufacturing_order_from_customer_order', 
      ]
    },
    {
      type: 'category',
      label: 'Services',
      link: {type: 'doc', id: 'Services'},
      items: [
        'Selling_sevices_at_the_point_of_delivery', 
        'Pre-ordered_services', 
      ]
    },
  ]
};
