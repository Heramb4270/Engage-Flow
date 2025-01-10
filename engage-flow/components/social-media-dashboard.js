'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, MessageCircle, Share2 } from "lucide-react"
import { useState } from "react"
import DateRangePicker from "./date-range-picker"
import sampleData from "../social_media_data.json"


// Engagement Stats Component
const TotalEngagement = ({ data }) => {
  const totals = data.reduce((acc, post) => ({
    likes: parseInt(acc.likes) + parseInt(post.likes),
    comments: parseInt(acc.comments) + parseInt(post.comments),
    shares: parseInt(acc.shares) + parseInt(post.shares)
  }), { likes: 0, comments: 0, shares: 0 });

  const icons = {
    likes: <Heart className="h-5 w-5 text-red-500" />,
    comments: <MessageCircle className="h-5 w-5 text-blue-500" />,
    shares: <Share2 className="h-5 w-5 text-green-500" />
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {Object.entries(totals).map(([key, value]) => (
        <Card key={key} className="bg-white hover:bg-purple-50 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              {icons[key]}
              <p className="text-sm font-medium text-purple-600 uppercase">{key}</p>
            </div>
            <h3 className="text-2xl font-bold mt-2">{value.toLocaleString()}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Post Type Distribution Component remains the same
const PostTypeDistribution = ({ data }) => {
  const distribution = data.reduce((acc, post) => {
    acc[post.type] = (acc[post.type] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="space-y-4">
      {Object.entries(distribution).map(([type, count]) => (
        <div key={type} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-purple-700 font-medium capitalize">{type.replace('_', ' ')}</span>
            <span className="text-gray-600">{count}</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div 
              className="bg-purple-500 h-2 rounded-full"
              style={{ width: `${(count / data.length) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

// Engagement Table Component
const EngagementTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left p-4 text-sm font-medium text-purple-600">Post ID</th>
            <th className="text-left p-4 text-sm font-medium text-purple-600">Type</th>
            <th className="text-left p-4 text-sm font-medium text-purple-600">City</th>
            <th className="text-right p-4 text-sm font-medium text-purple-600">
              <div className="flex items-center justify-end space-x-1">
                <Heart className="h-4 w-4" />
                <span>Likes</span>
              </div>
            </th>
            <th className="text-right p-4 text-sm font-medium text-purple-600">
              <div className="flex items-center justify-end space-x-1">
                <MessageCircle className="h-4 w-4" />
                <span>Comments</span>
              </div>
            </th>
            <th className="text-right p-4 text-sm font-medium text-purple-600">
              <div className="flex items-center justify-end space-x-1">
                <Share2 className="h-4 w-4" />
                <span>Shares</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => (
            <tr key={post.post_id} className="border-b border-gray-100 hover:bg-purple-50">
              <td className="p-4 text-sm">{post.post_id}</td>
              <td className="p-4 text-sm capitalize">{post.type.replace('_', ' ')}</td>
              <td className="p-4 text-sm">{post.city}</td>
              <td className="p-4 text-sm text-right">{post.likes.toLocaleString()}</td>
              <td className="p-4 text-sm text-right">{post.comments.toLocaleString()}</td>
              <td className="p-4 text-sm text-right">{post.shares.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Rest of the components remain the same...
// DateRangePicker and SocialMediaDashboard components stay unchanged

export function SocialMediaDashboard() {
  const [filteredData, setFilteredData] = useState(sampleData);

  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Social Media Analysis Dashboard</h1>
        
        <div className="mb-6">
          <DateRangePicker />
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white p-1 rounded-lg border border-gray-200">
            <TabsTrigger 
              value="overview"
              className="px-6 py-2 rounded-md data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="details"
              className="px-6 py-2 rounded-md data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700"
            >
              Details
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <TotalEngagement data={filteredData} />
            
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Post Type Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <PostTypeDistribution data={filteredData} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="details">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Engagement Details</CardTitle>
                <CardDescription className="text-gray-500">
                  A detailed view of engagement metrics for each post
                </CardDescription>
              </CardHeader>
              <CardContent>
                <EngagementTable data={filteredData} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default SocialMediaDashboard;