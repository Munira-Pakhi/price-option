import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentData = [
        { id: 1, name: "Student 1", math: 85, physics: 78, chemistry: 90 },
        { id: 2, name: "Student 2", math: 78, physics: 82, chemistry: 85 },
        { id: 3, name: "Student 3", math: 92, physics: 88, chemistry: 91 },
        { id: 4, name: "Student 4", math: 76, physics: 70, chemistry: 78 },
        { id: 5, name: "Student 5", math: 89, physics: 84, chemistry: 88 },
        { id: 6, name: "Student 6", math: 70, physics: 65, chemistry: 72 },
        { id: 7, name: "Student 7", math: 95, physics: 90, chemistry: 96 },
        { id: 8, name: "Student 8", math: 81, physics: 76, chemistry: 80 },
        { id: 9, name: "Student 9", math: 88, physics: 85, chemistry: 89 },
        { id: 10, name: "Student 10", math: 73, physics: 68, chemistry: 75 },
      ];
      

    return (
        <div>
            <LChart width={800} height={400} data={studentData}>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey={"physics"} stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;