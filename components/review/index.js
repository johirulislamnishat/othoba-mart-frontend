import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { API_BASE_URL } from "../../apiconstants";
import useProvider from "../../hooks/useProvider";

const Review = (props) => {
    console.log("props", props);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const {
        state: {
            user: { accessToken, user_name, _id },
        },
    } = useProvider();

    const onSubmit = (data) => {
        const formData = {
            ...data,
            reviewer_id: _id,
        };
        console.log(formData);
        axios
            .post(`${API_BASE_URL}/review`, formData, {
                headers: {
                    token: `Bearer ${accessToken}`,
                    product_id: props.id,
                },
            })
            .then((res) => {
                if (res.status === 200) {
                    alert("Thanks for Your Feedback...!!!");
                    reset();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container review-area">
            <div className="review">
                <h1>Please Leave a Review:</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder="User Name"
                        className="rateinput"
                        type="text"
                        defaultValue={user_name}
                        {...register("reviewer_name")}
                    />
                    <input
                        placeholder="Rating between 1 to 5"
                        className="rateinput"
                        type="number"
                        {...register(
                            "rating",
                            { min: 1, max: 5 },
                            { required: true }
                        )}
                    />
                    {errors.rating && "Enter rating between 1 to 5"}
                    <textarea
                        placeholder="Your Feedback"
                        className="rating"
                        type="text"
                        {...register("review", { required: true })}
                    />
                    <input className="review-btn" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Review;
