import { useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import styles from "../styles/chartModal.module.css";

export default function ChartModal({ chart, setChart }) {
	useEffect(() => {}, []);
	return (
		<div className={styles.container}>
			<div className={styles.modal}>
				<ResponsiveContainer width="100%" height="100%">
					<LineChart
						width={500}
						height={300}
						data={chart}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line type="monotone" dataKey="value" stroke="#8884d8" />
					</LineChart>
				</ResponsiveContainer>
				<h1 onClick={() => setChart(null)}>X</h1>
			</div>
		</div>
	);
}
