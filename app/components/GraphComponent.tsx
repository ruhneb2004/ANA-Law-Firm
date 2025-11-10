"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import cytoscape from "cytoscape";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { practiceAreas } from "../subTopicContent";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Define types for cytoscape elements
interface NodeData {
  id: string;
  label: string;
  type: string;
}

interface EdgeData {
  source: string;
  target: string;
  type: string;
}

interface CytoscapeElement {
  data: NodeData | EdgeData;
  position?: { x: number; y: number };
}

// 2. Accept and destructure the props
export default function ConstellationNetwork() {
  const cyRef = useRef<HTMLDivElement>(null);
  const cyInstance = useRef<cytoscape.Core | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const handleNodeClick = useCallback((nodeId: string, nodeType: string) => {
    let targetId = nodeId;

    if (nodeType === "subtopic") {
      for (const area of practiceAreas) {
        if (area.subtopics.some((sub) => sub.id === nodeId)) {
          targetId = area.id;
          break;
        }
      }
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!cyRef.current || cyInstance.current || dimensions.width === 0) return;

    // Get viewport dimensions
    const viewportWidth = dimensions.width;
    const viewportHeight = dimensions.height;

    // Center position
    const centerX = viewportWidth / 2;
    const centerY = viewportHeight / 2;

    // Responsive padding and spacing
    const isMobile = viewportWidth < 768;
    const isTablet = viewportWidth >= 768 && viewportWidth < 1024;

    const padding = isMobile ? 60 : isTablet ? 80 : 120;
    const usableWidth = (viewportWidth - padding * 2) / 2;
    const usableHeight = (viewportHeight - padding * 2) / 2;

    // Main categories (topics) arranged in triangle
    const topicSpread = isMobile ? 0.35 : isTablet ? 0.4 : 0.45;
    const topics = [
      {
        id: "corporate",
        label: "Corporate & Transactions",
        x: centerX,
        y: centerY - usableHeight * topicSpread,
      },
      {
        id: "disputes",
        label: "Disputes",
        x: centerX - usableWidth * topicSpread * 1.1,
        y: centerY + usableHeight * topicSpread * 1.1,
      },
      {
        id: "regulatory",
        label: "Regulatory & Compliance",
        x: centerX + usableWidth * topicSpread * 1,
        y: centerY + usableHeight * topicSpread * 1.15,
      },
    ];

    // Practice areas spread across the screen
    const subtopicSpread = isMobile ? 0.7 : isTablet ? 0.8 : 0.9;
    const subtopics = [
      {
        id: "franchising",
        label: "Franchising & Licensing",
        x: centerX - usableWidth * subtopicSpread * 0.4,
        y: centerY - usableHeight * subtopicSpread,
        parent: "corporate",
      },
      {
        id: "ipstrategy",
        label: "IP & Brand Strategy",
        x: centerX + usableWidth * subtopicSpread * 0.4,
        y: centerY - usableHeight * subtopicSpread,
        parent: "corporate",
      },
      {
        id: "employment",
        label: "Employment & HR Advisory",
        x: centerX + usableWidth * subtopicSpread,
        y: centerY - usableHeight * subtopicSpread * 0.9,
        parent: "corporate",
      },
      {
        id: "fintech",
        label: "FinTech & Digital Business",
        x: centerX + usableWidth * subtopicSpread * 0.85,
        y: centerY + usableHeight * subtopicSpread * 0.2,
        parent: "corporate",
      },

      {
        id: "trademark",
        label: "Trademark Infringement",
        x: centerX - usableWidth * subtopicSpread * 0.2,
        y: centerY + usableHeight * subtopicSpread * 0.95,
        parent: "disputes",
      },
      {
        id: "crossborder",
        label: "Cross-Border Coordination",
        x: centerX - usableWidth * subtopicSpread * 0.75,
        y: centerY + usableHeight * subtopicSpread * 1.1,
        parent: "disputes",
      },
      {
        id: "onlinecontent",
        label: "Online Content & Media",
        x: centerX - usableWidth * subtopicSpread,
        y: centerY + usableHeight * subtopicSpread * 0.2,
        parent: "disputes",
      },
      {
        id: "banking",
        label: "Banking & Financial Disputes",
        x: centerX - usableWidth * subtopicSpread * 0.95,
        y: centerY - usableHeight * subtopicSpread * 0.3,
        parent: "disputes",
      },

      {
        id: "dataprotection",
        label: "Data Protection & Privacy",
        x: centerX + usableWidth * subtopicSpread * 0.2,
        y: centerY + usableHeight * subtopicSpread * 1.3,
        parent: "regulatory",
      },
      {
        id: "datalocalisation",
        label: "Data Localisation",
        x: centerX + usableWidth * subtopicSpread * 0.9,
        y: centerY + usableHeight * subtopicSpread * 1,
        parent: "regulatory",
      },
      {
        id: "aigovernance",
        label: "AI Governance & Accountability",
        x: centerX + usableWidth * subtopicSpread * 0.85,
        y: centerY - usableHeight * subtopicSpread * 0.3,
        parent: "regulatory",
      },
      {
        id: "packaging",
        label: "Packaging & Consumer Law",
        x: centerX - usableWidth * subtopicSpread * 0.9,
        y: centerY - usableHeight * subtopicSpread * 0.8,
        parent: "regulatory",
      },
    ];

    // Create elements
    const elements: CytoscapeElement[] = [];

    // Add topics
    topics.forEach((topic) => {
      elements.push({
        data: { id: topic.id, label: topic.label, type: "topic" },
        position: { x: topic.x, y: topic.y },
      });
    });

    // Add subtopics
    subtopics.forEach((subtopic) => {
      elements.push({
        data: { id: subtopic.id, label: subtopic.label, type: "subtopic" },
        position: { x: subtopic.x, y: subtopic.y },
      });
    });

    // Add parent connections
    subtopics.forEach((subtopic) => {
      elements.push({
        data: { source: subtopic.parent, target: subtopic.id, type: "parent" },
      });
    });

    // Add inter-practice area connections based on the data
    const interConnections = [
      { source: "ipstrategy", target: "franchising" },
      { source: "ipstrategy", target: "trademark" },
      { source: "ipstrategy", target: "onlinecontent" },
      { source: "ipstrategy", target: "packaging" },
      { source: "franchising", target: "onlinecontent" },
      { source: "franchising", target: "packaging" },
      { source: "trademark", target: "ipstrategy" },
      { source: "trademark", target: "onlinecontent" },
      { source: "trademark", target: "crossborder" },
      { source: "crossborder", target: "banking" },
      { source: "crossborder", target: "employment" },
      { source: "employment", target: "crossborder" },
      { source: "employment", target: "dataprotection" },
      { source: "dataprotection", target: "employment" },
      { source: "dataprotection", target: "datalocalisation" },
      { source: "dataprotection", target: "aigovernance" },
      { source: "datalocalisation", target: "dataprotection" },
      { source: "datalocalisation", target: "aigovernance" },
      { source: "datalocalisation", target: "fintech" },
      { source: "aigovernance", target: "dataprotection" },
      { source: "aigovernance", target: "datalocalisation" },
      { source: "aigovernance", target: "onlinecontent" },
      { source: "packaging", target: "franchising" },
      { source: "packaging", target: "ipstrategy" },
      { source: "packaging", target: "onlinecontent" },
      { source: "onlinecontent", target: "ipstrategy" },
      { source: "onlinecontent", target: "trademark" },
      { source: "onlinecontent", target: "aigovernance" },
      { source: "onlinecontent", target: "packaging" },
      { source: "fintech", target: "datalocalisation" },
      { source: "fintech", target: "banking" },
      { source: "banking", target: "crossborder" },
      { source: "banking", target: "fintech" },
    ];

    interConnections.forEach((conn) => {
      elements.push({
        data: { source: conn.source, target: conn.target, type: "inter" },
      });
    });

    // Initialize Cytoscape
    const cy = cytoscape({
      container: cyRef.current,
      elements: elements,

      style: [
        {
          selector: "node",
          style: {
            label: "data(label)",
            "text-valign": "center",
            "text-halign": "center",
            "font-size": isMobile ? "10px" : "13px",
            "font-weight": 400,
            color: "#7f1d1d",
            "text-outline-width": 0,
            "background-opacity": 0,
            "border-width": 0,
            width: isMobile ? 6 : 8,
            height: isMobile ? 6 : 8,
            "background-color": "#000000",
            shape: "ellipse",
            "text-events": "yes",
            "text-margin-y": -3,
            "transition-property":
              "font-size, color, background-color, width, height, opacity",
            "transition-duration": 300,
            "transition-timing-function": "ease-in-out",
          },
        },
        {
          selector: 'node[type="topic"]',
          style: {
            "font-size": isMobile ? "12px" : "16px",
            "font-weight": 600,
            color: "#7f1d1d",
            width: isMobile ? 8 : 12,
            height: isMobile ? 8 : 12,
            "background-color": "#000000",
          },
        },
        {
          selector: 'node[type="subtopic"]',
          style: {
            "font-size": isMobile ? "9px" : "13px",
            "font-weight": 400,
            color: "#7f1d1d",
            width: isMobile ? 4 : 6,
            height: isMobile ? 4 : 6,
            "background-color": "#000000",
          },
        },
        {
          selector: "edge",
          style: {
            width: 0.4,
            "line-color": "#7f1d1d",
            opacity: 0.3,
            "curve-style": "straight",
            "line-style": "dashed",
            "line-dash-pattern": [6, 8],
            "transition-property": "width, line-color, opacity",
            "transition-duration": 300,
            "transition-timing-function": "ease-in-out",
          },
        },
        {
          selector: 'edge[type="inter"]',
          style: {
            width: 0.4,
            opacity: 0.2,
          },
        },
        {
          selector: 'edge[type="parent"]',
          style: {
            width: 0.4,
            opacity: 0.3,
          },
        },
        {
          selector: "node.highlighted",
          style: {
            color: "#7f1d1d",
            "z-index": 100,
            "background-color": "#000000",
          },
        },
        {
          selector: 'node[type="topic"].highlighted',
          style: {
            "font-size": isMobile ? "14px" : "19px",
            width: isMobile ? 10 : 16,
            height: isMobile ? 10 : 16,
          },
        },
        {
          selector: 'node[type="subtopic"].highlighted',
          style: {
            "font-size": isMobile ? "11px" : "16px",
            width: isMobile ? 6 : 10,
            height: isMobile ? 6 : 10,
          },
        },
        {
          selector: "node.connected",
          style: {
            color: "#7f1d1d",
            "z-index": 50,
            "background-color": "#000000",
          },
        },
        {
          selector: "node.faded",
          style: {
            opacity: 0.15,
          },
        },
        {
          selector: "edge.highlighted",
          style: {
            width: 0.75,
            "line-color": "#7f1d1d",
            opacity: 0.8,
            "z-index": 75,
          },
        },
        {
          selector: "edge.faded",
          style: {
            opacity: 0.05,
          },
        },
      ],

      layout: {
        name: "preset",
      },

      userZoomingEnabled: false,
      userPanningEnabled: false,
      boxSelectionEnabled: false,
      autoungrabify: true,
      autounselectify: true,
    });
    cyInstance.current = cy;

    // Hover delay management
    let hoverTimeout: NodeJS.Timeout | null = null;
    let currentHoveredNode: cytoscape.NodeSingular | null = null;
    const HOVER_DELAY = 100;

    function activateHoverEffect(node: cytoscape.NodeSingular) {
      const connectedEdges = node.connectedEdges();
      const connectedNodes = connectedEdges.connectedNodes().not(node);

      node.addClass("highlighted");
      connectedNodes.addClass("connected");
      connectedEdges.addClass("highlighted");

      cy.nodes().not(node).not(connectedNodes).addClass("faded");
      cy.edges().not(connectedEdges).addClass("faded");
    }

    function deactivateHoverEffect() {
      cy.elements().removeClass("highlighted connected faded");
    }

    cy.on("mouseover", "node", function (evt) {
      const node = evt.target;

      if (currentHoveredNode === node) {
        return;
      }

      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }

      currentHoveredNode = node;

      hoverTimeout = setTimeout(() => {
        if (currentHoveredNode === node) {
          activateHoverEffect(node);
        }
      }, HOVER_DELAY);
    });

    cy.on("mouseout", "node", function () {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
      }

      currentHoveredNode = null;
      deactivateHoverEffect();
    });

    // Update the 'tap' handler
    cy.on("tap", "node", function (evt) {
      const node = evt.target;
      // Pass the ID and type up to the parent
      handleNodeClick(node.data("id"), node.data("type"));
    });

    return () => {
      if (cyInstance.current) {
        cyInstance.current.destroy();
        cyInstance.current = null;
      }
    };
  }, [dimensions, handleNodeClick]);

  return (
    <div className="relative w-full h-screen bg-white text-[#8D1A1B] overflow-hidden">
      {/* Central Heading */}
      <Link
        href={"/practiceArea"}
        className="absolute  z-10"
        onClick={() => {
          console.log("name");
        }}
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#8D1A1B] tracking-tight whitespace-nowrap pb-12 ${montserrat.className} font-thin`}
        >
          PRACTICE AREAS
        </h1>
      </Link>

      {/* Graph Container */}
      <div ref={cyRef} className="w-full h-full" />
    </div>
  );
}
