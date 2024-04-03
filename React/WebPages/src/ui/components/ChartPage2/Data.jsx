import React, { Fragment, useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";
import { Box } from "@mui/material";

function getData() {
    return [
        { month: "Jan", subscriptions: 222 },
        { month: "Feb", subscriptions: 240 },
        { month: "Mar", subscriptions: 280 },
        { month: "Apr", subscriptions: 300 },
        { month: "May", subscriptions: 350 },
        { month: "Jun", subscriptions: 420 },
        { month: "Jul", subscriptions: 300 },
        { month: "Aug", subscriptions: 270 },
        { month: "Sep", subscriptions: 260 },
        { month: "Oct", subscriptions: 385 },
        { month: "Nov", subscriptions: 320 },
        { month: "Dec", subscriptions: 330 },
    ];
}

const Data = () => {
    const [totalSubscriptions, setTotalSubscriptions] = useState(0);

    useEffect(() => {
        const data = getData();
        const total = data.reduce((acc, curr) => acc + curr.subscriptions, 0);
        setTotalSubscriptions(total);
    }, []);

    const options = {
        title: {
            text: `Visitors this Month ${totalSubscriptions}`,
        },
        data: getData(),
        series: [
            {
                type: "area",
                xKey: "month",
                yKey: "subscriptions",
                yName: "Subscriptions",
            }
        ],
    };

    return (
        <Fragment>
            <Box position="none" height={320} width={520}>
                <AgChartsReact options={options} />
            </Box>
        </Fragment>
    );
};

export default Data;
