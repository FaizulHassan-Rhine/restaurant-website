import React, { Component } from "react";

import { Link } from "react-router-dom";
import purchase from "../../images/purchase.jpg";

function PurchasePolicyBangla(props) {
    return (
        <div className="container mx-auto text-black bangla-font">
            <div className="privacy">
                <div className="container">
                    <div className="mx-10 mt-5">
                        <img className="border-8 border-black" src={purchase} width="100%" height="100%" alt="" />

                        <h1 className="text-center mt-5 mb-5 text-4xl font-semibold">
                        ক্রয় এবং বিক্রয় নীতি
                        </h1>
                        <div>
                            <p className="pb-5">
                            এই ক্রয় ও বিক্রয় নীতি সেই শর্তাবলী নিয়ন্ত্রণ করে যার অধীনে একজন গ্রাহক ক্রয় করে এবং আমরা ফ্রাই ফ্রেঞ্জি থেকে পণ্য সরবরাহ করি। আমাদের সাথে একটি অর্ডার দেওয়ার মাধ্যমে, একজন গ্রাহক এই নীতি দ্বারা আবদ্ধ হতে সম্মত হন।
                            </p>
                            <b style={{ fontSize: "20px", marginTop: "3%" }}>
                                {" "}
                                ১. অর্ডার প্রক্রিয়া
                            </b>
                            <p>
                                <span className="font-bold"></span> আমাদের হটলাইন নম্বর, Facebook, Instagram এবং WhatsApp এর মাধ্যমে অর্ডার করা যেতে পারে। আপনার পছন্দসই পণ্য নির্বাচন করার পরে, আপনি চেকআউট করতে যেতে পারেন এবং আপনার অর্ডার প্রক্রিয়াকরণ এবং বিতরণের জন্য প্রয়োজনীয় তথ্য সরবরাহ করতে পারেন।
                            </p>

                        </div>

                        <div className="mt-6">
                            <b style={{ fontSize: "20px" }}> ২.	মূল্য নির্ধারণ এবং অর্থপ্রদান </b>
                            <br />

                            <p>
                                <span className="font-bold">২.১</span> আমাদের ওয়েবসাইটে প্রদর্শিত সমস্ত মূল্য ভ্যাট এবং ট্যাক্স সহ, যদি না অন্যথায় বলা হয়।
                            </p>
                            <p>
                                <span className="font-bold">২.২</span> আপনি আপনার অর্ডার পাওয়ার পরে পেমেন্ট করা হয়। আমাদের ডেলিভারি কর্মীরা ডেলিভারির পরে নগদে অর্থ সংগ্রহ করবেন অথবা আপনি যেখানে উপলব্ধ মোবাইল পেমেন্ট সমাধান ব্যবহার করে অর্থ প্রদান করতে পারেন।
                            </p>
                        </div>

                        <div className="mt-6">
                            <b style={{ fontSize: "20px" }}>৩. ডেলিভারি </b>
                            <br />

                            <p>
                                <span className="font-bold">৩.১</span> আমরা যত তাড়াতাড়ি সম্ভব সমস্ত অর্ডার সরবরাহ করার চেষ্টা করি। ডেলিভারির সময়সীমা ডেলিভারির অবস্থান এবং অর্ডারের সময়ের উপর নির্ভর করবে।
                            </p>

                            <p>
                                <span className="font-bold">৩.২</span> আমাদের নিয়ন্ত্রণের বাইরের পরিস্থিতির কারণে কোনো বিলম্বের জন্য আমরা দায়ী নই।
                            </p>
                        </div>

                        <div className="mt-6">
                            <b style={{ fontSize: "20px" }}>৪. অর্ডার বাতিলকরণ </b>
                            <br />

                            <p>
                                <span className="font-bold"></span>অর্ডার একবার স্থাপন করা এবং নিশ্চিত করা বাতিল বা পরিবর্তন করা যাবে না। ব্যতিক্রমী পরিস্থিতিতে, যত তাড়াতাড়ি সম্ভব <span className="text-orange-500">eat@fryfrenzy.com</span> এ আমাদের সাথে যোগাযোগ করুন।
                            </p>
                        </div>

                        <div className="mt-5">
                            <b style={{ fontSize: "20px" }}>৫. পণ্যের গুণমান</b>
                            <br />

                            <p>
                                <span className="font-bold"></span> আমরা মানসম্পন্ন পণ্য সরবরাহ করতে প্রতিশ্রুতিবদ্ধ। আপনি প্রাপ্ত পণ্যের সাথে সন্তুষ্ট না হলে, আপনার অর্ডার প্রাপ্তির ১ ঘন্টার মধ্যে আমাদের অবহিত করুন। আমরা আপনার উদ্বেগের সমাধান করার জন্য আমাদের যথাসাধ্য চেষ্টা করব।
                            </p>
                        </div>
                        <div className="mt-5">
                            <b style={{ fontSize: "20px" }}>
                            ৬. ফেরত এবং বিনিময়
                            </b>
                            <br />

                            <p>
                                <span className="font-bold"></span> আমাদের পণ্যগুলির পচনশীল প্রকৃতির কারণে, আমরা রিটার্ন বা বিনিময় অফার করতে অক্ষম। রিফান্ড শুধুমাত্র আপনার অর্ডারের ডেলিভারি না করার ক্ষেত্রে জারি করা হবে, যদি অ-ডেলিভারির কারণ আমাদের নিয়ন্ত্রণের মধ্যে থাকে।
                            </p>
                        </div>
                        <div className="mt-5">
                            <b style={{ fontSize: "20px" }}>
                            ৭. দায়বদ্ধতার সীমাবদ্ধতা
                            </b>
                            <br />

                            <p>
                                <span className="font-bold"></span> আমাদের পণ্য এবং পরিষেবাগুলির সাথে সম্পর্কিত যে কোনও দাবির জন্য আমাদের দায় প্রশ্নে থাকা পণ্যগুলির ক্রয় মূল্যের বেশি হবে না৷ আমরা পরোক্ষ, বিশেষ বা ফলস্বরূপ ক্ষতির জন্য দায়ী থাকব না।
                            </p>
                        </div>
                        <div className="mt-5">
                            <b style={{ fontSize: "20px" }}>৮. এই নীতি পরিবর্তন </b>
                            <br />

                            <p>
                                <span className="font-bold"></span> আমরা যেকোনো সময় এই ক্রয় এবং বিক্রয় নীতি পরিবর্তন করার অধিকার সংরক্ষণ করি। পরিবর্তনগুলি আমাদের সোশ্যাল মিডিয়া এবং ওয়েবসাইটে পোস্ট করা হবে এবং পোস্ট করার সাথে সাথেই কার্যকর হবে৷
                            </p>
                        </div>
                        <div className="mt-5">
                            <b style={{ fontSize: "20px" }}>৯. আমাদের সাথে যোগাযোগ করুন </b>
                            <br />

                            <p>
                                <span className="font-bold"></span> এই ক্রয় এবং বিক্রয় নীতি সম্পর্কে আপনার কোন প্রশ্ন বা উদ্বেগ থাকলে, অনুগ্রহ করে <span className="text-orange-500">eat@fryfrenzy.com</span> এ আমাদের সাথে যোগাযোগ করুন
                            </p>
                        </div>
                        <div className="mt-5">
                            <p>
                            আপনি ফ্রাই ফ্রেঞ্জির সাথে একটি অর্ডার দেওয়ার সময় এই শর্তগুলির আপনার গ্রহণযোগ্যতা ঘটবে বলে মনে করা হবে। যদি একজন গ্রাহক এই শর্তাবলীতে সম্মত না হন, তাহলে একজন গ্রাহককে অর্ডার না দেওয়ার জন্য উৎসাহিত করা হয়।
                            </p>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default PurchasePolicyBangla;
