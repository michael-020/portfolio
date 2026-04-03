"use client"

import dynamic from "next/dynamic"
import { ThemeInput } from "react-activity-calendar";
import "react-activity-calendar/tooltips.css";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
)

const minimalTheme: ThemeInput = {
  light: ['hsl(0, 0%, 92%)', 'rebeccapurple'],
  dark: ['#383838', '#7DB9B6'],
}

export function GitHubActivity() {
  return (
    <div className="grid border-b border-border" style={{ gridTemplateColumns: "1fr minmax(0, 720px) 1fr" }}>
      {/* Left rail */}
      <div className="border-r border-border" />

      {/* Center content */}
      <div className="relative px-6 py-10">
        <h2 className="section-heading">
          GitHub Activity
        </h2>

        <div className="border border-border rounded-lg p-3 overflow-x-auto relative">
          <div className="dark:opacity-0">

           <GitHubCalendar
            username="michael-020"
            blockSize={10}
            blockMargin={3}
            fontSize={12}
            theme={minimalTheme}
            colorScheme="light"
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
          <div className="opacity-0 dark:opacity-100 p-3 absolute inset-0">

           <GitHubCalendar
            username="michael-020"
            blockSize={10}
            blockMargin={3}
            fontSize={12}
            theme={minimalTheme}
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

      {/* Right rail */}
      <div className="border-l border-border" />
    </div>
  )
}