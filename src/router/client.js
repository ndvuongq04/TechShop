
const LayoutClient = () => import('@/layouts/client/ClientLayout.vue');
const pageHome = () => import('@/views/client/home/HomeView.vue');


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
            }
        ]
    }
];
export default client; // xuất ra mảng client để sử dụng trong các file khác