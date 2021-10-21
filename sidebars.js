module.exports = {
  docs: [
    'MyCompany', 
    'Development', 
    {
      type: 'category',
      label: 'Installation',
      items: [
        'Installation', 
        'MyCompany_migration_to_another_server', 
      ]
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        'Administration', 
        'User_roles', 
        'Role_permissions', 
        'Users', 
      ]
    },
    'Data_upload', 
    {
      type: 'category',
      label: 'General settings and master data',
      items: [
        'General_settings_and_master_data', 
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
      items: [
        'Sales', 
        {
          type: 'category',
          label: 'Pricelists',
          items: [
            'Pricelists', 
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
      items: [
        'Invoicing', 
        {
          type: 'category',
          label: 'Settings',
          items: [
            'Settings', 
            'Bill_type', 
            'Invoice_type', 
            'Payment_type', 
          ]
        },
        {
          type: 'category',
          label: 'Reporting',
          items: [
            'Reporting', 
            'Payments', 
            'Invoices_report', 
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Purchase',
      items: [
        'Purchase', 
        'Purchase_order_type', 
        'Vendor_pricelists', 
      ]
    },
    {
      type: 'category',
      label: 'Inventory',
      items: [
        'Inventory', 
        'Location_settings', 
        'Shipment_type', 
        'Receipt_type', 
      ]
    },
    {
      type: 'category',
      label: 'Manufacturing',
      items: [
        'Manufacturing', 
        'Manufacturing_order_type', 
      ]
    },
    {
      type: 'category',
      label: 'Wholesale',
      items: [
        'Wholesale', 
        {
          type: 'category',
          label: 'Purchasing',
          items: [
            'Purchasing', 
            'Puchase_order', 
            {
              type: 'category',
              label: 'Receipts',
              items: [
                'Receipts', 
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
          items: [
            'Sale_of_goods', 
            'Customer_orders', 
            'Shipments', 
            'Customer_invoice_and_Payment_collection', 
            {
              type: 'category',
              label: 'Cross-docking',
              items: [
                'Cross-docking', 
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
      items: [
        'Retail', 
        {
          type: 'category',
          label: 'General settings',
          items: [
            'General_settings', 
            'Cash_registers', 
            'Discount_cards', 
          ]
        },
        {
          type: 'category',
          label: 'POS',
          items: [
            'POS', 
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
      items: [
        'Manufacturing_management', 
        {
          type: 'category',
          label: 'Bills of Materials',
          items: [
            'Bills_of_Materials', 
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
      items: [
        'Services', 
        'Selling_sevices_at_the_point_of_delivery', 
        'Pre-ordered_services', 
      ]
    },
  ]
};
