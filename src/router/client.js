
const LayoutClient = () => import('@/layouts/client/ClientLayout.vue');
const pageHome = () => import('@/views/client/home/HomeView.vue');
const pageDetail = () => import('@/views/client/details/DetailsView.vue');
const pageCart = () => import('@/views/client/cart/CartView.vue');
const pageShop = () => import('@/views/client/shopMain/ShopView.vue');
const pageCheckout = () => import('@/views/client/checkout/CheckOutView.vue');


const client = [
    {
        path: '/client',
        component: LayoutClient, // sử dụng layout khách hàng
        children: [
            {
                path: '', // đường dẫn con cho trang chủ
                name: 'client-home',
                component: pageHome,// sử dụng component trang chủ
                meta: { showBanner: true } // meta để hiển thị banner trên trang chủ
            },
            {
                path: 'details', // đường dẫn con cho trang chi tiết sản phẩm
                name: 'client-details',
                component: pageDetail, // sử dụng component trang chi tiết sản phẩm
            },
            {
                path: 'cart', // đường dẫn con cho giỏ hàng
                name: 'client-cart',
                component: pageCart, // sử dụng component giỏ hàng
            },
            {
                path: 'shop', // đường dẫn con cho trang cửa hàng
                name: 'client-shop',
                component: pageShop, // sử dụng component trang cửa hàng
            },
            {
                path: 'checkout', // đường dẫn con cho trang thanh toán
                name: 'client-checkout',
                component: pageCheckout, // sử dụng component trang thanh toán
            }
        ]
    }
];
export default client; // xuất ra mảng client để sử dụng trong các file khác