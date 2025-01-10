import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'



export function PostTypeDistribution({ data }) {
  const postTypeCounts = data.reduce((acc, post) => {
    acc[post.type] = (acc[post.type] || 0) + 1
    return acc
  }, {} )

  const pieData = Object.entries(postTypeCounts).map(([name, value]) => ({ name, value }))

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

