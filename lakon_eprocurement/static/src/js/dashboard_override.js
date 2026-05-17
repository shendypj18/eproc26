odoo.define('lakon_eprocurement.dashboard_override', function (require) {
    "use strict";

    var ajax = require('web.ajax');
    var CustomDashBoard = require('multi_vendor_marketplace.seller_dashboard_action');

    CustomDashBoard.include({
        start: function () {
            var self = this;
            ajax.rpc('/seller_dashboard').then(function (res) {
                $('#pending').text(res.pending);
                $('#approved').text(res.approved);
                $('#rejected').text(res.rejected);
                if (res.user_type == false) {
                    $('#check_user_type').hide();
                }

                $("#product_pending").click(function () {
                    self.do_action({
                        name: 'BoQ Pending',
                        type: 'ir.actions.act_window',
                        res_model: 'product.template',
                        view_mode: 'kanban',
                        views: [[res.product_kanban_id, 'kanban']],
                        domain: [['state', '=', 'pending']],
                    });
                });

                $("#product_approved").click(function () {
                    self.do_action({
                        name: 'BoQ Approved',
                        type: 'ir.actions.act_window',
                        res_model: 'product.template',
                        view_mode: 'kanban',
                        views: [[res.product_kanban_id, 'kanban']],
                        domain: [['state', '=', 'approved']],
                    });
                });

                $("#product_rejected").click(function () {
                    self.do_action({
                        name: 'BoQ Rejected',
                        type: 'ir.actions.act_window',
                        res_model: 'product.template',
                        view_mode: 'kanban',
                        views: [[res.product_kanban_id, 'kanban']],
                        domain: [['state', '=', 'rejected']],
                    });
                });

                $('#seller_pending').text(res.seller_pending);
                $('#seller_approved').text(res.seller_approved);
                $('#seller_rejected').text(res.seller_rejected);
                $('#inventory_pending').text(res.inventory_pending);
                $('#inventory_approved').text(res.inventory_approved);
                $('#inventory_rejected').text(res.inventory_rejected);
                $('#payment_pending').text(res.payment_pending);
                $('#payment_approved').text(res.payment_approved);
                $('#payment_rejected').text(res.payment_rejected);
                $('#order_pending').text(res.order_pending);
                $('#order_approved').text(res.order_approved);
                $('#order_shipped').text(res.order_shipped);
                $('#order_cancel').text(res.order_cancel);

                $("#divseller_rejected").click(function () {
                    self.do_action({
                        name: 'Vendor Rejected',
                        type: 'ir.actions.act_window',
                        res_model: 'res.partner',
                        view_mode: 'kanban,form',
                        views: [[false, 'kanban'], [false, 'form']],
                        domain: [['state', '=', 'Denied']],
                    });
                });

                $("#divseller_approved").click(function () {
                    self.do_action({
                        name: 'Vendor Approved',
                        type: 'ir.actions.act_window',
                        res_model: 'res.partner',
                        view_mode: 'kanban,form',
                        views: [[false, 'kanban'], [false, 'form']],
                        domain: [['state', '=', 'Approved']],
                    });
                });

                $("#divseller_pending").click(function () {
                    self.do_action({
                        name: 'Vendor Pending',
                        type: 'ir.actions.act_window',
                        res_model: 'res.partner',
                        view_mode: 'kanban,form',
                        views: [[false, 'kanban'], [false, 'form']],
                        domain: [['state', '=', 'Pending for Approval']],
                    });
                });

                $("#inv_req_pending").click(function () {
                    self.do_action({
                        name: 'Inventory Request Pending',
                        type: 'ir.actions.act_window',
                        res_model: 'inventory.request',
                        view_mode: 'kanban,form',
                        views: [[false, 'kanban'], [false, 'form']],
                        domain: [['state', '=', 'Requested']],
                    });
                });

                $("#inv_req_approved").click(function () {
                    self.do_action({
                        name: 'Inventory Request Approved',
                        type: 'ir.actions.act_window',
                        res_model: 'inventory.request',
                        view_mode: 'kanban,form',
                        views: [[false, 'kanban'], [false, 'form']],
                        domain: [['state', '=', 'Approved']],
                    });
                });

                $("#inv_req_rejected").click(function () {
                    self.do_action({
                        name: 'Inventory Request Rejected',
                        type: 'ir.actions.act_window',
                        res_model: 'inventory.request',
                        view_mode: 'kanban,form',
                        views: [[false, 'kanban'], [false, 'form']],
                        domain: [['state', '=', 'Rejected']],
                    });
                });

                $("#div_payment_pending").click(function () {
                    self.do_action({
                        name: 'Payment Request Pending',
                        type: 'ir.actions.act_window',
                        res_model: 'seller.payment',
                        view_mode: 'kanban,form',
                        views: [[false, 'kanban'], [false, 'form']],
                        domain: [['state', '=', 'Requested']],
                    });
                });

                $("#div_payment_approved").click(function () {
                    self.do_action({
                        name: 'Payment Request Approved',
                        type: 'ir.actions.act_window',
                        res_model: 'seller.payment',
                        view_mode: 'kanban,form',
                        views: [[false, 'kanban'], [false, 'form']],
                        domain: [['state', '=', 'Validated']],
                    });
                });

                $("#div_payment_rejected").click(function () {
                    self.do_action({
                        name: 'Payment Request Rejected',
                        type: 'ir.actions.act_window',
                        res_model: 'seller.payment',
                        view_mode: 'kanban,form',
                        views: [[false, 'kanban'], [false, 'form']],
                        domain: [['state', '=', 'Rejected']],
                    });
                });

                $("#divorder_pending").click(function () {
                    self.do_action({
                        name: 'Project Pending',
                        type: 'ir.actions.act_window',
                        res_model: 'sale.order.line',
                        view_mode: 'kanban,form',
                        views: [[res.sale_order_kanban_id, 'kanban'], [res.sale_order_form_id, 'form']],
                        domain: [['state', '=', 'pending']],
                    });
                });

                $("#divorder_approved").click(function () {
                    self.do_action({
                        name: 'Project Approved',
                        type: 'ir.actions.act_window',
                        res_model: 'sale.order.line',
                        view_mode: 'kanban,form',
                        views: [[res.sale_order_kanban_id, 'kanban'], [res.sale_order_form_id, 'form']],
                        domain: [['state', '=', 'approved']],
                    });
                });

                $("#divorder_shipped").click(function () {
                    self.do_action({
                        name: 'Project Completed',
                        type: 'ir.actions.act_window',
                        res_model: 'sale.order.line',
                        view_mode: 'kanban,form',
                        views: [[res.sale_order_kanban_id, 'kanban'], [res.sale_order_form_id, 'form']],
                        domain: [['state', '=', 'shipped']],
                    });
                });

                $("#divorder_cancel").click(function () {
                    self.do_action({
                        name: 'Project Cancelled',
                        type: 'ir.actions.act_window',
                        res_model: 'sale.order.line',
                        view_mode: 'kanban,form',
                        views: [[res.sale_order_kanban_id, 'kanban'], [res.sale_order_form_id, 'form']],
                        domain: [['state', '=', 'cancel']],
                    });
                });
            });
        },
    });

    return CustomDashBoard;
});
