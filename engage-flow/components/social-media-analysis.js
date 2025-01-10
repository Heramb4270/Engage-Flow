"use client"
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart3, TrendingUp } from 'lucide-react';
import sampleData from "../social_media_data.json";
// Sample data


const postTypes = ['carousel', 'reel', 'static_image'];

const calculateAverages = (data) => {
  const totals = data.reduce((acc, post) => {
    if (!acc[post.type]) {
      acc[post.type] = { likes: 0, comments: 0, shares: 0, count: 0 }
    }
    acc[post.type].likes += parseInt(post.likes);
    acc[post.type].comments += parseInt(post.comments);
    acc[post.type].shares += parseInt(post.shares);
    acc[post.type].count += 1;
    return acc;
  }, {});

  return Object.entries(totals).map(([type, stats]) => ({
    type,
    avgLikes: parseInt(stats.likes) / parseInt(stats.count),
    avgComments: parseInt(stats.comments) / parseInt(stats.count),
    avgShares: parseInt(stats.shares) / parseInt(stats.count)
  }));
};

const SocialMediaAnalysis = () => {
  const chartData = postTypes.map(type => {
    const posts = sampleData.filter(post => post.type === type);
    return {
      type,
      Likes: posts.reduce((sum, post) => sum + parseInt(post.likes), 0),
      Comments: posts.reduce((sum, post) => sum + parseInt(post.comments), 0),
      Shares: posts.reduce((sum, post) => sum + parseInt(post.shares), 0)
    };
  });

  const averages = calculateAverages(sampleData);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-black">Social Media Post Analysis</h1>
      
      <Tabs defaultValue="chart" className="">
        <TabsList className="flex justify-between mb-8">
          <TabsTrigger value="chart" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Engagement Chart
          </TabsTrigger>
          <TabsTrigger value="averages" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Averages
          </TabsTrigger>
          
        </TabsList>

        <TabsContent value="chart">
          <Card>
            <CardHeader>
              <CardTitle>Engagement by Post Type</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="type" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Likes" fill="#3b82f6" />
                    <Bar dataKey="Comments" fill="#22c55e" />
                    <Bar dataKey="Shares" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="averages">
          <Card>
            <CardHeader>
              <CardTitle>Average Engagement by Post Type</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Avg. Likes</TableHead>
                    <TableHead>Avg. Comments</TableHead>
                    <TableHead>Avg. Shares</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {averages.map((avg) => (
                    <TableRow key={avg.type}>
                      <TableCell>{avg.type}</TableCell>
                      <TableCell>{avg.avgLikes.toFixed(2)}</TableCell>
                      <TableCell>{avg.avgComments.toFixed(2)}</TableCell>
                      <TableCell>{avg.avgShares.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Analysis Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>Based on the data, we can observe that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reels have the highest engagement across all metrics (likes, comments, and shares).</li>
              <li>Carousels perform better than static images but not as well as reels.</li>
              <li>Static images have the lowest engagement overall.</li>
            </ul>
            <p>This suggests that creating more video content (reels) and interactive content (carousels) could potentially increase overall engagement on the social media platform.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SocialMediaAnalysis;