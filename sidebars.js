/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docs: [
        'overview',
        {
            type: 'category',
            label: 'Administration',
            items: [
                'administration/installation',
                'administration/installation-docker',
                'administration/development',
            ],
            link: {
                type: 'doc',
                id: 'administration/administration'
            }
        },
        {
            type: 'category',
            label: 'Master Data',
            items: [
                'masterdata/partners',
                'masterdata/items',
                'masterdata/categories',
                'masterdata/uom',
                'masterdata/departments',
                'masterdata/countries',
                'masterdata/currencies',
                'masterdata/contracts',
                'masterdata/activities',
            ],
            link: {
                type: 'doc',
                id: 'masterdata/masterdata'
            }
        },
        {
            type: 'category',
            label: 'Inventory',
            items: [
                'inventory/locations',
                'inventory/receipts',
                'inventory/shipments',
                'inventory/transfers',
                'inventory/transfer-bulk-create',
                'inventory/scrap',
                'inventory/adjustments',
                'inventory/picking',
                'inventory/product-sku',
                'inventory/lots-and-packages',
                'inventory/reports-and-ledgers',
                'inventory/costing',
                'inventory/settings',
            ],
            link: {
                type: 'doc',
                id: 'inventory/inventory'
            }
        },
        {
            type: 'category',
            label: 'Invoicing',
            items: [
                'invoicing/bills',
                'invoicing/invoices',
                'invoicing/shipments-from-invoice',
                'invoicing/refunds-and-corrections',
                'invoicing/payments',
                'invoicing/incoming-payments',
                'invoicing/outgoing-payments',
                'invoicing/debt-and-calendar',
                'invoicing/taxes',
                'invoicing/reports-and-printing',
                'invoicing/settings',
                {
                    type: 'category',
                    label: 'Ksef',
                    items: [
                        'invoicing/ksef/wprowadzenie',
                        'invoicing/ksef/dostep-i-logowanie',
                        'invoicing/ksef/sesja-i-szyfrowanie',
                        'invoicing/ksef/wysylka-faktur',
                        'invoicing/ksef/pobieranie-faktur',
                        'invoicing/ksef/faktury-zakupu',
                        'invoicing/ksef/automatyzacja',
                        'invoicing/ksef/rozwiazywanie-problemow',
                    ],
                    link: {
                        type: 'doc',
                        id: 'invoicing/ksef/ksef'
                    }
                },
            ],
            link: {
                type: 'doc',
                id: 'invoicing/invoicing'
            }
        },
        {
            type: 'category',
            label: 'Purchase',
            items: [
                'purchase/orders',
                'purchase/receipts',
                'purchase/bills',
                'purchase/pricelists',
                'purchase/reports',
                'purchase/settings'
            ],
            link: {
                type: 'doc',
                id: 'purchase/purchase'
            }
        },
        {
            type: 'category',
            label: 'Manufacturing',
            items: [
                'manufacturing/bom',
                'manufacturing/orders',
                'manufacturing/sales-orders',
                'manufacturing/workflow',
                'manufacturing/production-and-consumption',
                'manufacturing/costing',
                'manufacturing/unbuild',
                'manufacturing/by-products',
                'manufacturing/lots-and-printing',
                'manufacturing/scrap',
                'manufacturing/reports',
                'manufacturing/settings',
            ],
            link: {
                type: 'doc',
                id: 'manufacturing/manufacturing'
            }
        },
        {
            type: 'category',
            label: 'Sales',
            items: [
                'sales/orders',
                'sales/workflow-and-statuses',
                'sales/shipments',
                'sales/invoices',
                'sales/pricelists',
                'sales/discounts',
                'sales/reports',
                'sales/settings',
            ],
            link: {
                type: 'doc',
                id: 'sales/sales'
            }
        },
        {
            type: 'category',
            label: 'Retail',
            items: [
                'retail/pos',
                'retail/returns',
                'retail/sessions',
                'retail/payments',
                'retail/discount-cards',
                'retail/marking',
                'retail/settings'
            ],
            link: {
                type: 'doc',
                id: 'retail/retail'
            }
        },
        {
            type: 'category',
            label: 'Project Management',
            items: [
                'projectManagement/projects',
                'projectManagement/tasks',
                'projectManagement/time-entries',
                'projectManagement/timesheets',
                'projectManagement/team-and-roles',
                'projectManagement/reports',
                'projectManagement/settings',
            ],
            link: {
                type: 'doc',
                id: 'projectManagement/projectManagement'
            }
        },
        {
            type: 'category',
            label: 'Human Resources',
            items: [
                'humanResources/recruitment',
                'humanResources/attendance',
                'humanResources/payroll',
                'humanResources/payroll-batch',
                'humanResources/payslip',
                'humanResources/net-wage',
                'humanResources/payroll-time-entries',
                'humanResources/payroll-payments',
                'humanResources/settings'
            ],
            link: {
                type: 'doc',
                id: 'humanResources/humanResources'
            }
        },
        {
            type: 'category',
            label: 'CRM',
            items: [
                'crm/leads',
                'crm/kanban',
                'crm/communications',
                'crm/sales-and-documents',
                'crm/reports',
                'crm/zadarma',
                'crm/mango',
                'crm/settings'
            ],
            link: {
                type: 'doc',
                id: 'crm/crm'
            }
        },
        {
            type: 'category',
            label: 'Transport',
            items: [
                'transport/vehicles',
                'transport/drivers',
                'transport/service',
                'transport/contracts',
                'transport/settings',
            ],
            link: {
                type: 'doc',
                id: 'transport/transport'
            }
        }
    ],
};

module.exports = sidebars;
