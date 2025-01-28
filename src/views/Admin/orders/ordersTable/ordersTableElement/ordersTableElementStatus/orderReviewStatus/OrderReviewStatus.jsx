import {MdRateReview} from "react-icons/md";

const OrderReviewStatus = ({silverColor, colorNotExist, order, ...props}) => {
    let mess = order.messages[0];

    if (order.hasReview) {
        let title =
            new Date(order.hasReview.opinionCreateAt).toLocaleString() +
            ":  " +
            (order.hasReview.text ? order.hasReview.text : "---");
        return <MdRateReview title={title} key="K14" color={"green"}/>;
    } else {

        return (
            <MdRateReview
                title={"Відгуків по замовленню немає"}
                key="K15"
                color={silverColor}
            />
        );
    }
};
export default OrderReviewStatus;
