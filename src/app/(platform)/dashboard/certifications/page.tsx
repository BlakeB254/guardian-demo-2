"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  CheckCircle2,
  Clock,
  Download,
  ExternalLink,
  Lock,
  Star,
  Trophy,
  FileText,
} from "lucide-react";

const certifications = [
  {
    id: "perc",
    name: "Illinois PERC Card",
    issuer: "Illinois Department of Financial & Professional Regulation",
    status: "earned",
    earnedDate: "2024-01-15",
    expiryDate: "2027-01-15",
    credentialId: "PERC-2024-789456",
    image: "/certifications/perc.png",
    description:
      "Official Permanent Employee Registration Card required for security work in Illinois.",
  },
  {
    id: "fundamentals",
    name: "Security Fundamentals",
    issuer: "Guardian Elite Academy",
    status: "earned",
    earnedDate: "2024-02-20",
    expiryDate: null,
    credentialId: "GE-SF-2024-001234",
    image: "/certifications/fundamentals.png",
    description:
      "Comprehensive training in security principles, threat assessment, and professional conduct.",
  },
  {
    id: "deescalation",
    name: "De-escalation Specialist",
    issuer: "Guardian Elite Academy",
    status: "in_progress",
    progress: 75,
    image: "/certifications/deescalation.png",
    description:
      "Advanced techniques for verbal intervention and conflict resolution.",
  },
  {
    id: "executive",
    name: "Executive Protection",
    issuer: "Guardian Elite Academy",
    status: "locked",
    prerequisite: "De-escalation Specialist",
    image: "/certifications/executive.png",
    description:
      "Elite training for close protection and VIP security operations.",
  },
  {
    id: "firearms",
    name: "Armed Security Certification",
    issuer: "Illinois State Police",
    status: "locked",
    prerequisite: "Security Fundamentals",
    image: "/certifications/firearms.png",
    description:
      "State certification for armed security personnel with firearm training.",
  },
];

const stats = [
  { label: "Certifications Earned", value: "2", icon: Trophy },
  { label: "In Progress", value: "1", icon: Clock },
  { label: "Available", value: "2", icon: Star },
];

export default function CertificationsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Certifications
          </h1>
          <p className="text-gray-600 mt-1">
            Track your credentials and professional certifications
          </p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export All
        </Button>
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

      {/* Certifications Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <Card
            key={cert.id}
            className={cert.status === "locked" ? "opacity-75" : ""}
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      cert.status === "earned"
                        ? "bg-emerald-100"
                        : cert.status === "in_progress"
                        ? "bg-[#c9a227]/20"
                        : "bg-gray-100"
                    }`}
                  >
                    {cert.status === "earned" ? (
                      <Award className="h-6 w-6 text-emerald-600" />
                    ) : cert.status === "in_progress" ? (
                      <Clock className="h-6 w-6 text-[#c9a227]" />
                    ) : (
                      <Lock className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <p className="text-sm text-gray-500">{cert.issuer}</p>
                  </div>
                </div>
                <Badge
                  variant={
                    cert.status === "earned"
                      ? "success"
                      : cert.status === "in_progress"
                      ? "gold"
                      : "outline"
                  }
                >
                  {cert.status === "earned"
                    ? "Earned"
                    : cert.status === "in_progress"
                    ? "In Progress"
                    : "Locked"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">{cert.description}</p>

              {cert.status === "earned" && (
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Credential ID</span>
                    <span className="font-mono text-gray-900">
                      {cert.credentialId}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Earned</span>
                    <span className="text-gray-900">
                      {new Date(cert.earnedDate!).toLocaleDateString()}
                    </span>
                  </div>
                  {cert.expiryDate && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Expires</span>
                      <span className="text-gray-900">
                        {new Date(cert.expiryDate).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {cert.status === "in_progress" && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Progress</span>
                    <span className="font-medium text-[#c9a227]">
                      {cert.progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#c9a227] rounded-full transition-all"
                      style={{ width: `${cert.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {cert.status === "locked" && (
                <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
                  <Lock className="h-4 w-4" />
                  <span>Requires: {cert.prerequisite}</span>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                {cert.status === "earned" && (
                  <>
                    <Button variant="outline" size="sm" className="flex-1">
                      <FileText className="mr-2 h-4 w-4" />
                      View Certificate
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </>
                )}
                {cert.status === "in_progress" && (
                  <Button variant="primary" size="sm" className="flex-1">
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Continue Course
                  </Button>
                )}
                {cert.status === "locked" && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    disabled
                  >
                    <Lock className="mr-2 h-4 w-4" />
                    Complete Prerequisites
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
