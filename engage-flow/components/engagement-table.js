import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

  
  export function EngagementTable({ data }) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Post ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Likes</TableHead>
            <TableHead>Comments</TableHead>
            <TableHead>Shares</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((post) => (
            <TableRow key={post.post_id}>
              <TableCell>{post.post_id}</TableCell>
              <TableCell>{post.type}</TableCell>
              <TableCell>{post.likes}</TableCell>
              <TableCell>{post.comments}</TableCell>
              <TableCell>{post.shares}</TableCell>
              <TableCell>{post.city}</TableCell>
              <TableCell>{post.date.toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  
  