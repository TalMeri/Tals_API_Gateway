const ROUTES = [
    {
        url: '/menu',
        proxy: {
            target: "http://localhost:3002/menu/",
            changeOrigin: true,
            pathRewrite: {
                [`^/menu`]: '',
            },
        }
    },
    {
        url: '/cart',
        proxy: {
            target: "http://localhost:3003/cart/",
            changeOrigin: true,
            pathRewrite: {
                [`^/cart`]: '',
            },
        }
    },
    {
        url: '/user',
        proxy: {
            target: "http://localhost:3004/user/",
            changeOrigin: true,
            pathRewrite: {
                [`^/user`]: '',
            },
        }
    },
    {
        url: '/auth',
        proxy: {
            target: "http://localhost:3004/auth/",
            changeOrigin: true,
            pathRewrite: {
                [`^/auth`]: '',
            },
        }
    },
    {
        url: '/order',
        proxy: {
            target: "http://localhost:3005/order/",
            changeOrigin: true,
            pathRewrite: {
                [`^/order`]: '',
            },
        }
    },
]

exports.ROUTES = ROUTES;