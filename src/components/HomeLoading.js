import React from "react";

const LoadingIndicator = (props) => {
    return (
        <div className="col wbdv-home-cover-col">
            {console.log("Hit")}
            <div className="wbdv-home-loading float-right">
                <img className="wbdv-home-loading-logo align-middle"
                     src={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1556e182-139b-4789-b105-10a30b237b19/d9x1gon-f8dbfd85-3f8c-4a93-bab0-bedb7459e2dd.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTU1NmUxODItMTM5Yi00Nzg5LWIxMDUtMTBhMzBiMjM3YjE5XC9kOXgxZ29uLWY4ZGJmZDg1LTNmOGMtNGE5My1iYWIwLWJlZGI3NDU5ZTJkZC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.i4sABzbqCeueKllm0OVVNftDElGcl0njtdXS5BI_kwY"}
                     alt="Card image cap"/>
            </div>
        </div>
    );
}

export default LoadingIndicator;