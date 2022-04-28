const { removeFromWish } = require("./Actions");

const data = [
    {
        item_img: "https://i.ibb.co/Wnw5cm0/gt3.jpg",
        item_name: "Huawei GT3 Classic Edition Smart Watch",
        item_price: 22749,
        item_qty: 1,
        item_total_price: 22749,
        shop_id: "1213",
        shop_name: "fff",
        _id: "6263a6ab01e32faff43ab57f",
    },
    {
        item_img: "https://i.ibb.co/Wnw5cm0/gt3.jpg",
        item_name: "Huawei GT3 Classic ",
        item_price: 22749,
        item_qty: 1,
        item_total_price: 22749,
        shop_id: "1213",
        shop_name: "fff",
        _id: "6263a6ab01e32faff43ab58f",
    },
];

const id = "6263a6ab01e32faff43ab57f";

test("should remove data", () => {
    const res = removeFromWish(data, id);
    expect(res).toStrictEqual({
        type: "REMOVE_FROM_WISH",
        payload: [
            {
                item_img: "https://i.ibb.co/Wnw5cm0/gt3.jpg",
                item_name: "Huawei GT3 Classic ",
                item_price: 22749,
                item_qty: 1,
                item_total_price: 22749,
                shop_id: "1213",
                shop_name: "fff",
                _id: "6263a6ab01e32faff43ab58f",
            },
        ],
    });
});
