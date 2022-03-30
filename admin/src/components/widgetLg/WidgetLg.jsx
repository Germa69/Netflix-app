import "./widgetLg.scss";

export default function WidgetLg() {

    const Button = ({ type }) => {
        return <button className={"widgetLg__btn " + type}>{type}</button>;
    };

    return (
        <div className="widgetLg">
            <h3 className="widgetLg__title">Latest transactions</h3>
            <table className="widgetLg__table">
                <tr className="widgetLg__tr">
                    <th className="widgetLg__th">Customer</th>
                    <th className="widgetLg__th">Date</th>
                    <th className="widgetLg__th">Amount</th>
                    <th className="widgetLg__th">Status</th>
                </tr>
                <tr className="widgetLg__tr">
                    <td className="widgetLg__user">
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className="widgetLg__img"
                        />
                        <span className="widgetLg__name">Susan Carol</span>
                    </td>
                    <td className="widgetLg__date">2 Jun 2021</td>
                    <td className="widgetLg__amount">$122.00</td>
                    <td className="widgetLg__status">
                        <Button type="approved" />
                    </td>
                </tr>
                <tr className="widgetLg__tr">
                    <td className="widgetLg__user">
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className="widgetLg__img"
                        />
                        <span className="widgetLg__name">Susan Carol</span>
                    </td>
                    <td className="widgetLg__date">2 Jun 2021</td>
                    <td className="widgetLg__amount">$122.00</td>
                    <td className="widgetLg__status">
                        <Button type="declined" />
                    </td>
                </tr>
                <tr className="widgetLg__tr">
                    <td className="widgetLg__user">
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className="widgetLg__img"
                        />
                        <span className="widgetLg__name">Susan Carol</span>
                    </td>
                    <td className="widgetLg__date">2 Jun 2021</td>
                    <td className="widgetLg__amount">$122.00</td>
                    <td className="widgetLg__status">
                        <Button type="pending" />
                    </td>
                </tr>
                <tr className="widgetLg__tr">
                    <td className="widgetLg__user">
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className="widgetLg__img"
                        />
                        <span className="widgetLg__name">Susan Carol</span>
                    </td>
                    <td className="widgetLg__date">2 Jun 2021</td>
                    <td className="widgetLg__amount">$122.00</td>
                    <td className="widgetLg__status">
                        <Button type="approved" />
                    </td>
                </tr>
            </table>
        </div>
    );
}
