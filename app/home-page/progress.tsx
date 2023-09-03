import * as React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface CheckedItems {
  [key: string]: boolean;
}

export function TaskProgress() {
  const [checkedItems, setCheckedItems] = React.useState<CheckedItems>({});
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const handleCheckboxChange = (id: string) => {
    setCheckedItems((prevItems) => ({
      ...prevItems,
      [id]: !prevItems[id],
    }));
  };

  const handleComboBoxClick = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <Card className="w-full bg-white h-fit p-4 shadow-2xl rounded-3xl justify-center items-center">
      <CardHeader className="text-3xl font-medium inline-block">
        <strong>Task</strong> Progress
      </CardHeader>
      <CardContent className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="1"
            checked={checkedItems["1"]}
            onChange={() => handleCheckboxChange("1")}
          />
          <div
            className={`cursor-pointer ${
              checkedItems["1"] || selectedItems.includes("1")
                ? "line-through text-gray-500"
                : ""
            }`}
            onClick={() => handleComboBoxClick("1")}
          >
            Financial Projection
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="2"
            checked={checkedItems["2"]}
            onChange={() => handleCheckboxChange("2")}
          />
          <div
            className={`cursor-pointer ${
              checkedItems["2"] || selectedItems.includes("2")
                ? "line-through text-gray-500"
                : ""
            }`}
            onClick={() => handleComboBoxClick("2")}
          >
            User Interview
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="3"
            checked={checkedItems["3"]}
            onChange={() => handleCheckboxChange("3")}
          />
          <div
            className={`cursor-pointer ${
              checkedItems["3"] || selectedItems.includes("3")
                ? "line-through text-gray-500"
                : ""
            }`}
            onClick={() => handleComboBoxClick("3")}
          >
            Daily Report
          </div>
        </div>
        <div className="flex items-center space-x-2 ">
          <Checkbox
            id="4"
            checked={checkedItems["4"]}
            onChange={() => handleCheckboxChange("4")}
          />
          <div
            className={`cursor-pointer ${
              checkedItems["4"] || selectedItems.includes("4")
                ? "line-through text-gray-500"
                : ""
            }`}
            onClick={() => handleComboBoxClick("4")}
          >
            Website Deployment
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
