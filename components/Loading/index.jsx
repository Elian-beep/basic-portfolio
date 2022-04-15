import React from "react";
import { AreaLoading, ContentLoading } from "./style";

export default function Loading() {

    return (
        <AreaLoading>
            <ContentLoading>
                <center>
                    <img src="/images/loading.svg" alt="loading..." />
                </center>
            </ContentLoading>
        </AreaLoading>
    );
}