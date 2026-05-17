# -*- coding: utf-8 -*-
{
    'name': "Lakon E-Procurement",
    'version': "16.0.1.0.0",
    'category': 'Customizations',
    'summary': 'Customizations for E-Procurement over Multi Vendor Marketplace',
    'description': """
    Customizations for Multi Vendor Marketplace:
    - Renamed Seller to Vendor
    - Renamed Marketplace terms (BoQ, Project, Payments)
    - Hide stock from dashboard
    - Changed Shipped to Completed
    """,
    'author': 'Lakon Tech',
    'depends': ['multi_vendor_marketplace'],
    'data': [
        'views/menu_inherit.xml',
        'views/view_inherit.xml',
        'views/template_inherit.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'lakon_eprocurement/static/src/xml/dashboard_inherit.xml',
            'lakon_eprocurement/static/src/js/dashboard_override.js',
        ],
    },
    'installable': True,
    'application': False,
    'auto_install': False,
}
