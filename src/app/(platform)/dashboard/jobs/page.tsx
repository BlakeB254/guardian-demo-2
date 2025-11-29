"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  Building2,
  Filter,
  Search,
  Bookmark,
  BookmarkCheck,
  ExternalLink,
  CheckCircle2,
  Star,
  Users,
} from "lucide-react";

const jobs = [
  {
    id: "1",
    title: "Security Officer",
    company: "Allied Universal",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$18-22/hr",
    posted: "2 days ago",
    description:
      "Looking for experienced security officers for corporate building patrol. PERC card required.",
    requirements: ["PERC Card", "1+ years experience", "Clean background"],
    benefits: ["Health Insurance", "401k", "Paid Training"],
    saved: false,
    featured: true,
  },
  {
    id: "2",
    title: "Event Security Specialist",
    company: "Securitas",
    location: "Chicago, IL",
    type: "Part-time",
    salary: "$20-25/hr",
    posted: "1 week ago",
    description:
      "Seeking professional security personnel for high-profile events at major venues.",
    requirements: ["PERC Card", "Event experience preferred", "Flexible schedule"],
    benefits: ["Weekly Pay", "Event Bonuses", "Uniform Provided"],
    saved: true,
    featured: false,
  },
  {
    id: "3",
    title: "Armed Security Guard",
    company: "Brinks",
    location: "Oak Brook, IL",
    type: "Full-time",
    salary: "$28-35/hr",
    posted: "3 days ago",
    description:
      "Armed security position for cash transport operations. Firearms certification required.",
    requirements: ["PERC Card", "FOID Card", "Armed Security License", "Clean driving record"],
    benefits: ["Premium Pay", "Full Benefits", "Company Vehicle"],
    saved: false,
    featured: true,
  },
  {
    id: "4",
    title: "Nightclub Security",
    company: "The Underground",
    location: "Chicago, IL (River North)",
    type: "Part-time",
    salary: "$22-28/hr + tips",
    posted: "5 days ago",
    description:
      "Upscale nightclub seeking experienced doormen and floor security. Weekend availability required.",
    requirements: ["PERC Card", "BASSET Certified", "2+ years nightlife experience"],
    benefits: ["Cash Tips", "Flexible Schedule", "Free Meals"],
    saved: false,
    featured: false,
  },
  {
    id: "5",
    title: "Executive Protection Agent",
    company: "Elite Shield Services",
    location: "Chicago, IL",
    type: "Contract",
    salary: "$45-75/hr",
    posted: "1 day ago",
    description:
      "High-end close protection for executives and VIPs. Must have EP training and experience.",
    requirements: [
      "Executive Protection Certification",
      "5+ years experience",
      "Concealed Carry License",
    ],
    benefits: ["Premium Rates", "Travel Opportunities", "Professional Development"],
    saved: true,
    featured: true,
  },
];

const stats = [
  { label: "Jobs Available", value: "47", icon: Briefcase },
  { label: "Applications Sent", value: "3", icon: Users },
  { label: "Saved Jobs", value: "2", icon: Bookmark },
];

export default function JobsPage() {
  const [savedJobs, setSavedJobs] = useState<string[]>(
    jobs.filter((j) => j.saved).map((j) => j.id)
  );
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSave = (jobId: string) => {
    setSavedJobs((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Job Board
          </h1>
          <p className="text-gray-600 mt-1">
            Find security positions matched to your certifications
          </p>
        </div>
        <Badge variant="gold" size="lg" className="self-start sm:self-auto">
          <CheckCircle2 className="mr-1 h-4 w-4" />
          30-Day Job Guarantee
        </Badge>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="text-center">
            <CardContent className="pt-6">
              <stat.icon className="h-8 w-8 mx-auto text-[#c9a227] mb-2" />
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Guarantee Banner */}
      <Card className="bg-gradient-to-r from-[#c9a227] to-[#e4c865] border-none">
        <CardContent className="py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[#1a1a2e]">
            <div>
              <h3 className="text-xl font-bold">
                Guardian Elite Job Placement Guarantee
              </h3>
              <p className="text-[#1a1a2e]/80 mt-1">
                Get hired within 30 days of certification or your money back.
                94% of graduates are placed within 2 weeks.
              </p>
            </div>
            <Button variant="secondary" className="whitespace-nowrap">
              Upload Resume
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search jobs by title, company, or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c9a227] focus:border-transparent outline-none"
          />
        </div>
        <Button variant="outline" className="flex-shrink-0">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <Card
            key={job.id}
            hover
            className={job.featured ? "border-[#c9a227]/50" : ""}
          >
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                {/* Company Logo Placeholder */}
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-7 w-7 text-gray-400" />
                </div>

                {/* Job Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">
                      {job.title}
                    </h3>
                    {job.featured && (
                      <Badge variant="gold" size="sm">
                        <Star className="mr-1 h-3 w-3" />
                        Featured
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <Building2 className="mr-1 h-4 w-4" />
                      {job.company}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <DollarSign className="mr-1 h-4 w-4" />
                      {job.salary}
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {job.posted}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {job.description}
                  </p>

                  {/* Requirements */}
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.slice(0, 3).map((req) => (
                      <Badge key={req} variant="outline" size="sm">
                        {req}
                      </Badge>
                    ))}
                    {job.requirements.length > 3 && (
                      <Badge variant="outline" size="sm">
                        +{job.requirements.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex lg:flex-col gap-2 lg:items-end flex-shrink-0">
                  <Badge
                    variant={
                      job.type === "Full-time"
                        ? "success"
                        : job.type === "Part-time"
                        ? "primary"
                        : "secondary"
                    }
                    className="lg:mb-2"
                  >
                    {job.type}
                  </Badge>
                  <div className="flex gap-2 ml-auto lg:ml-0">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleSave(job.id)}
                      className={savedJobs.includes(job.id) ? "text-[#c9a227]" : ""}
                    >
                      {savedJobs.includes(job.id) ? (
                        <BookmarkCheck className="h-4 w-4" />
                      ) : (
                        <Bookmark className="h-4 w-4" />
                      )}
                    </Button>
                    <Button variant="primary" size="sm">
                      Apply
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
