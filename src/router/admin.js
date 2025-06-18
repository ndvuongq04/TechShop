
const layoutAdminManager = () => import('@/layouts/admin/AdminLayout.vue');
const pageBrandManager = () => import('@/views/admin/brand/BrandManagement.vue');
const pageDashBoard = () => import('@/views/admin/dashboard/Dashboard.vue');
const pageOrderManager = () => import('@/views/admin/order/OrderManagement.vue');
const pageProductManager = () => import('@/views/admin/product/ProductManagement.vue');
const pageReportManager = () => import('@/views/admin/report/ReportManagement.vue');
const pageReviewManager = () => import('@/views/admin/review/ReviewManagement.vue');
const pageUserManager = () => import('@/views/admin/user/UserManagement.vue');


const admin = [
    {
        path: '/admin',
        component: layoutAdminManager, // sử dụng layout quản trị
        children: [
            {
                path: 'brands', // đường dẫn con cho quản lý thương hiệu
                name: 'admin-brand',
                component: pageBrandManager
            },
            {
                path: '', // đường dẫn con cho quản lý người dùng
                name: 'admin-dashboard',
                component: pageDashBoard
            },
            {
                path: 'orders', // đường dẫn con cho quản lý đơn hàng
                name: 'admin-order',
                component: pageOrderManager
            },
            {
                path: 'products', // đường dẫn con cho quản lý sản phẩm
                name: 'admin-product',
                component: pageProductManager
            },
            {
                path: 'reports', // đường dẫn con cho quản lý báo cáo
                name: 'admin-report',
                component: pageReportManager
            },
            {
                path: 'reviews', // đường dẫn con cho quản lý đánh giá
                name: 'admin-review',
                component: pageReviewManager
            },
            {
                path: 'users', // đường dẫn con cho quản lý người dùng
                name: 'admin-user',
                component: pageUserManager
            }
        ]
    }
];
export default admin; // xuất ra mảng admin để sử dụng trong các file khác