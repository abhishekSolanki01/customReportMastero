import React, { useState } from "react";
import { Select, DatePicker, Button, Table, message } from "antd";
import axios from "axios";
import moment from "moment";
import PowerBiReport from "../PowerBiReport";
import reportData from "./report";

const { Option } = Select;

const metricsList = [
  { "label": "Master-O ID", "value": "Master-O ID" },
  { "label": "Content launch date", "value": "Content launch date" },
  { "label": "challenges", "value": "challenges" },
  { "label": "Completion Status", "value": "Completion Status" },
  { "label": "completion date", "value": "completion date" },
  { "label": "completed in days", "value": "completed in days" },
  { "label": "Attempts", "value": "Attempts" },
  { "label": "score", "value": "score" },
  { "label": "max score", "value": "max score" },
  { "label": "time spent", "value": "time spent" },
  { "label": "micro skill name", "value": "micro skill name" },
  { "label": "login status", "value": "login status" },
  { "label": "last login date", "value": "last login date" }
];

const CustomReport = () => {
  const [selectedMetrics, setSelectedMetrics] = useState([]);
  const [previewData, setPreviewData] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateReport = async () => {
    if (!selectedMetrics.length) {
      message.error("Please select at least one metric.");
      return;
    }

    setLoading(true);
    try {
      // const response = await axios.post("http://localhost:5000/generate-report", {
      //   metrics: selectedMetrics,
      // });

      const response = reportData.map((row, index) => {
        let obj = {};
        selectedMetrics.forEach((metric) => {
          obj[metric] = row[metric];
        });
        return obj;
      });

      debugger

      setPreviewData(response);
      message.success("Report generated successfully!");
    } catch (error) {
      console.error("Error generating report:", error);
      message.error("Failed to generate report.");
    } finally {
      setLoading(false);
    }
  };

  const columns = selectedMetrics.map((metric) => ({
    title: metric.replace(/_/g, " ").toUpperCase(),
    dataIndex: metric,
    key: metric,
  }));

  return (
    <div style={{ padding: 20 }}>
      <h1>Custom Report Generator</h1>
      <div style={{ marginBottom: 20 }}>
        <h3>Select Metrics</h3>
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Choose metrics for the report"
          onChange={(values) => setSelectedMetrics(values)}
        >
          {metricsList.map((metric) => (
            <Option key={metric.value} value={metric.value}>
              {metric.label}
            </Option>
          ))}
        </Select>
      </div>
      <Button type="primary" onClick={generateReport} loading={loading}>
        Generate Report
      </Button>

      {previewData.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <h3>Report Preview</h3>
          <Table dataSource={previewData} columns={columns} rowKey="id" />
          {/* <PowerBiReport/> */}
        </div>
      )}
      <PowerBiReport/>
    </div>
  );
};

export default CustomReport;
