// import React, { useState } from "react";
import React from "react";

export default function About(props) {
    return (
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <div className="container">
                <h1 className="">About Us</h1>
            </div>
            <div className="container">
            <p><b>Sentence Modifier:  </b>Easily modify sentences by converting text between different cases. Convert text to uppercase, lowercase, capitalize the first letter of each word, or invert the case with just a click.</p>

                <p><b>Copy Text:  </b>Copy text from your clipboard with ease. Simply paste your text into our tool, and it's ready to be copied and used wherever you need it.</p>

                <p><b>Remove Extra Spaces: </b>Say goodbye to pesky extra spaces cluttering up your text. Our remove extra spaces tool automatically detects and eliminates excess spaces, ensuring your text looks clean and polished.</p>

                <br />
                <h4>Benefits of TextUtils:</h4>

                <p><b>Efficiency: </b>Perform text manipulation tasks quickly and efficiently, eliminating the need for manual editing.</p>
                <p><b>Accuracy: </b>Ensure consistency and accuracy in your text formatting with our precise tools.</p>
                <p><b>Convenience: </b>Access a range of text manipulation features in one convenient location, saving time and effort.</p>

                <br />
                <h4>Get Started with TextUtils Today!</h4>
                <p>Ready to take your text editing to the next level? Start using TextUtils today and experience the power of streamlined text manipulation. Simply paste your text, choose your desired action, and let TextUtils do the rest!</p>
            </div>
        </div>
    );
}
