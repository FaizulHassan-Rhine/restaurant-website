import React, { Component } from "react";

import privacy from "../../images/cookie.png";

function CookiePolicyBangla(props) {
    return (
        <div className="container mx-auto text-black bangla-font">
            <div className="privacy">
                <div className="container">
                    <div className="row mt-5">
                        <img src={privacy} width="100%" height="20%" alt="" />

                        <h1 className="text-center mt-5 text-4xl font-semibold">
                        কুকিজ নীতি
                        </h1>
                        <div>
                            <b style={{ fontSize: "20px", marginTop: "3%" }}>
                            সংক্ষিপ্ত ভূমিকা
                            </b>
                            <p>
                            এই কুকি নীতি ব্যাখ্যা করে কিভাবে আমরা আমাদের ওয়েবসাইটে <span className="text-orange-500">www.fryfrenzy.com</span> কুকিজ এবং অনুরূপ প্রযুক্তি ব্যবহার করি। এই নীতিটি আমরা যে ধরনের কুকি ব্যবহার করি, যে উদ্দেশ্যে আমরা সেগুলি ব্যবহার করি এবং আপনি কীভাবে আপনার কুকি পছন্দগুলি পরিচালনা করতে পারেন সে সম্পর্কে আপনাকে অবহিত করার উদ্দেশ্যে করা হয়েছে৷
                            </p>

                            <p>আমাদের ওয়েবসাইট অ্যাক্সেস বা ব্যবহার করে, আপনি এই কুকি নীতি অনুযায়ী কুকি ব্যবহারে সম্মত হন। আপনি যদি কুকিজ ব্যবহারে সম্মত না হন তবে দয়া করে সেগুলিকে অক্ষম করুন বা আমাদের ওয়েবসাইট ব্যবহার করা থেকে বিরত থাকুন।</p>
                        </div>

                        <div className="mt-5">
                            <b style={{ fontSize: "20px" }}>
                            কুকিজ কি?
                            </b>
                            <br />

                            <p>কুকিজ হল ছোট টেক্সট ফাইল যা আপনার ডিভাইসে (কম্পিউটার, ট্যাবলেট বা মোবাইল) রাখা হয় যখন আপনি কোনো ওয়েবসাইট পরিদর্শন করেন। ওয়েবসাইটগুলিকে আরও দক্ষতার সাথে কাজ করতে, ব্যবহারকারীর অভিজ্ঞতা বাড়াতে এবং ওয়েবসাইট মালিকদের তথ্য প্রদান করতে এগুলি ব্যাপকভাবে ব্যবহৃত হয়।</p>
                        </div>

                        <div className="mt-6 flex flex-col gap-3">
                            <b style={{ fontSize: "20px" }}>
                            আমরা ব্যবহার করি কুকির প্রকারভেদ
                            </b>

                            <p><b>ক.</b> প্রয়োজনীয় কুকিজ: এই কুকিগুলি আমাদের ওয়েবসাইটের কার্যকারিতার জন্য প্রয়োজনীয় এবং আপনাকে এর বৈশিষ্ট্যগুলি নেভিগেট করতে এবং ব্যবহার করতে সক্ষম করে। এগুলি সাধারণত আপনার ক্রিয়াকলাপের প্রতিক্রিয়া হিসাবে সেট করা হয়, যেমন ওয়েবসাইটের নিরাপদ অঞ্চলগুলি অ্যাক্সেস করা বা ফর্মগুলি পূরণ করা৷ এই কুকিজ ছাড়া, আমাদের ওয়েবসাইটের কিছু অংশ সঠিকভাবে কাজ নাও করতে পারে।</p>
                            <p><b>খ.</b> পারফরম্যান্স এবং অ্যানালিটিক্স কুকিজ: এই কুকিগুলি ভিজিটররা কীভাবে আমাদের ওয়েবসাইট ব্যবহার করে সে সম্পর্কে তথ্য সংগ্রহ করে, যেমন কোন পৃষ্ঠাগুলি প্রায়শই পরিদর্শন করা হয় বা যদি তারা ত্রুটি বার্তা পায়। আমরা আমাদের ওয়েবসাইটের কার্যকারিতা এবং কার্যকারিতা উন্নত করতে এবং দর্শকরা কীভাবে এটির সাথে ইন্টারঅ্যাক্ট করে তা বোঝার জন্য আমরা এই ডেটা ব্যবহার করি। এই কুকি ব্যক্তিগতভাবে শনাক্তযোগ্য তথ্য সংগ্রহ করে না।</p>
                            <p><b>গ.</b> কার্যকারিতা কুকিজ: এই কুকিগুলি আমাদের ওয়েবসাইটকে আপনার করা পছন্দগুলি মনে রাখার অনুমতি দেয় (যেমন আপনার ভাষা পছন্দ বা আপনি যে অঞ্চলে আছেন) এবং উন্নত বৈশিষ্ট্যগুলি সরবরাহ করে৷ এগুলি আপনার অনুরোধ করা পরিষেবাগুলি প্রদান করতেও ব্যবহার করা যেতে পারে, যেমন আপনার লগইন বিবরণ বা পছন্দগুলি মনে রাখা।</p>
                            <p><b>ঘ.</b> বিজ্ঞাপন কুকিজ: আমরা আপনার আগ্রহ এবং অনলাইন কার্যকলাপের উপর ভিত্তি করে ব্যক্তিগতকৃত বিজ্ঞাপন প্রদান করতে বিজ্ঞাপন কুকি ব্যবহার করতে পারি। এই কুকিগুলি বিভিন্ন ওয়েবসাইট জুড়ে আপনার ব্রাউজিং অভ্যাস ট্র্যাক করে এবং আপনার আগ্রহের প্রোফাইল তৈরি করতে ব্যবহার করা যেতে পারে। আপনি কতবার বিজ্ঞাপন দেখেন এবং বিজ্ঞাপন প্রচারের কার্যকারিতা পরিমাপ করতেও এগুলি ব্যবহার করা হয়।</p>


                        </div>

                        <div className="mt-6">
                            <b style={{ fontSize: "20px" }}>
                            তৃতীয় পক্ষের কুকিজ
                            </b>
                            <br />

                            <p>
                            আমরা আমাদের ক্রিয়াকলাপের বিভিন্ন দিকগুলিতে সহায়তা করার জন্য তৃতীয় পক্ষের পরিষেবা প্রদানকারীদের আমাদের ওয়েবসাইটে কুকি সেট করার অনুমতি দিতে পারি। এই প্রদানকারীদের বিশ্লেষণ এবং বিজ্ঞাপন কোম্পানি অন্তর্ভুক্ত হতে পারে. তৃতীয় পক্ষের কুকিগুলি এই প্রদানকারীদের নিজ নিজ গোপনীয়তা নীতির সাপেক্ষে।
                            </p>
                        </div>

                        <div className="mt-5">
                            <b style={{ fontSize: "20px" }}>
                            আপনার কুকি পছন্দ ব্যবস্থাপনা
                            </b>
                            <br />

                            <p>
                            আপনি আপনার ব্রাউজার সেটিংসে কুকি নিয়ন্ত্রণ এবং পরিচালনা করতে পারেন। বেশিরভাগ ওয়েব ব্রাউজার আপনাকে কুকি মুছে ফেলতে, সম্পূর্ণরূপে ব্লক করতে বা নির্দিষ্ট ওয়েবসাইটের জন্য আপনার পছন্দগুলি কনফিগার করার অনুমতি দেয়। দয়া করে মনে রাখবেন যে আপনি কুকিজ নিষ্ক্রিয় বা ব্লক করলে, আমাদের ওয়েবসাইটের কিছু বৈশিষ্ট্য সঠিকভাবে কাজ নাও করতে পারে।
                            </p>
                        </div>
                        <div className="mt-5">
                            <b style={{ fontSize: "20px" }}>
                            এই কুকি নীতির আপডেট
                            </b>
                            <br />

                            <p>
                            আমরা সময়ে সময়ে এই কুকি নীতি আপডেট করতে পারি আমাদের অনুশীলনের পরিবর্তনগুলি প্রতিফলিত করার জন্য বা অন্যান্য কার্যকরী, আইনগত বা নিয়ন্ত্রক কারণে। আমরা আপনাকে যেকোনো আপডেটের জন্য পর্যায়ক্রমে এই নীতি পর্যালোচনা করতে উত্সাহিত করি। আপডেট করা সংস্করণটি এই নীতির শীর্ষে একটি আপডেট করা "কার্যকর তারিখ" দ্বারা নির্দেশিত হবে৷
                            </p>
                        </div>
                        <div className="mt-5">
                            <b style={{ fontSize: "20px" }}>
                            যোগাযোগ করুন
                            </b>
                            <br />

                            <p>
                            আমাদের কুকিজ বা এই কুকি নীতির ব্যবহার সম্পর্কে আপনার কোন প্রশ্ন বা উদ্বেগ থাকলে, অনুগ্রহ করে আমাদের সাথে <span className="text-orange-500">eat@fryfrenzy.com</span> এ যোগাযোগ করুন।
                            </p>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default CookiePolicyBangla;