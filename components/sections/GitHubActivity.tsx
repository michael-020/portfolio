"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { ThemeInput } from "react-activity-calendar";
import "react-activity-calendar/tooltips.css";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
)

const minimalTheme: ThemeInput = {
  light: ['hsl(0, 0%, 92%)', '#383838'],
  dark: ['#383838', 'hsl(0, 0%, 92%)'],
}

export function GitHubActivity() {
  const [dateRange, setDateRange] = useState<{ start: Date; end: Date } | null>(null);
  const [blockSize, setBlockSize] = useState(10);

  useEffect(() => {
    const now = new Date();
    const twelveMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 12, 1);
    const tenDaysFromNow = new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000);
    setDateRange({ start: twelveMonthsAgo, end: tenDaysFromNow });

    const handleResize = () => {
      if (window.innerWidth < 400) {
        setBlockSize(4);
      } else if (window.innerWidth < 480) {
        setBlockSize(5);
      } else if (window.innerWidth < 640) {
        setBlockSize(7);
      } else {
        setBlockSize(10);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const transformData = (contributions: any[]) => {
    if (!dateRange) return contributions;
    return contributions.filter((activity: any) => {
      const date = new Date(activity.date);
      return date >= dateRange.start && date <= dateRange.end;
    });
  };

  if (!dateRange) return null;
  return (
    <>
      {/* Title row */}
      <div className="grid border-b border-border" style={{ gridTemplateColumns: "minmax(16px, 1fr) minmax(0, 720px) minmax(16px, 1fr)" }}>
        <div className="border-r border-border" />
        <div className="flex items-center px-6 h-12">
          <h2 className="section-heading font-vt323">GitHub Activity</h2>
        </div>
        <div className="border-l border-border" />
      </div>

      {/* Content row */}
      <div className="grid border-b border-border" style={{ gridTemplateColumns: "minmax(16px, 1fr) minmax(0, 720px) minmax(16px, 1fr)" }}>
        <div className="border-r border-border" />

        <div className="relative px-6 py-10">
          <div className="border border-border rounded-lg p-2 sm:p-3 overflow-x-auto relative no-scrollbar">
            <div className="dark:opacity-0 min-w-0">

             <GitHubCalendar
              username="michael-020"
              blockSize={blockSize}
              blockMargin={2}
              fontSize={12}
              theme={minimalTheme}
              colorScheme="light"
              transformData={transformData}
              tooltips={{
                activity: {
                  text: (activity: any) =>
                    `${activity.count} contributions on ${activity.date}`,
                  placement: "top",
                  offset: 6,
                  hoverRestMs: 200,
                  withArrow: true,
                },
              }}
              />
            </div>
            <div className="opacity-0 dark:opacity-100 p-2 sm:p-3 absolute inset-0 min-w-0">

             <GitHubCalendar
              username="michael-020"
              blockSize={blockSize}
              blockMargin={2}
              fontSize={10}
              theme={minimalTheme}
              transformData={transformData}
              tooltips={{
                activity: {
                  text: (activity: any) =>
                    `${activity.count} contributions on ${activity.date}`,
                  placement: "top",
                  offset: 6,
                  hoverRestMs: 200,
                  withArrow: true,
                },
              }}
            />
            </div>
          </div>
        </div>

        <div className="border-l border-border" />
      </div>
    </>
  )
}