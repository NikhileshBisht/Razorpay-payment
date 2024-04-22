import React from 'react'
import { Box, Stack } from "@chakra-ui/react"
import Card from './Card'
import axios from "axios";
 


const Home = () => {


    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

        const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "pay",
            description: "razerpay",
            image: "https://wallpapers.com/images/featured-full/valorant-305kescxw5dpup7y.jpg",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "nikki",
                email: "xyz@gmail.com",
                contact: "9999999999"
            },
            notes: {
                "address": "WVN"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

    return (
    
        <Box bgColor="red.200">

            <Stack bgColor="blue.200" h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>
            
                <Card bgColor="red.200" amount={5000} img={"https://m.media-amazon.com/images/I/414pDdnWRML._SX300_SY300_QL70_FMwebp_.jpg"}  checkoutHandler={checkoutHandler} />
                <Card bgColor="red.200" amount={1000} img={"https://cdn.nutrabay.com/wp-content/uploads/2023/06/NB-OPT-1012-05_1.jpg"}  checkoutHandler={checkoutHandler} />
                <Card bgColor="red.200" amount={3000} img={"https://bigmusclesnutrition.com/cdn/shop/products/1500x1500reallmassgainer1KG-min.jpg?v=1698393108"}  checkoutHandler={checkoutHandler} />
            </Stack>
        </Box>
    )
}

export default Home