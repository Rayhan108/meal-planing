'use client'
import { Collapse } from 'antd';
import { useState } from 'react';
import frame1 from "@/asset/Frame2.png";
const { Panel } = Collapse;

const FAQ = () => {
    const [activeKey, setActiveKey] = useState<string | string[]>([]); 

  // Handle the change of active panel
  const onChange = (key: string | string[]) => {
    setActiveKey(key); // When a panel is clicked, set the active panel
  };

  return (
    <div className="min-h-screen flex items-center justify-center  md:py-48  " style={{ backgroundImage: `url(${frame1.src})` }}   >
      <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold font-title text-center mb-12 text-[#F37975]">
          Frequently Asked Questions
        </h2>
        
        <Collapse
          activeKey={activeKey} // Control which panel is open
          onChange={onChange} // Handle panel change
          expandIconPosition="end"
          className="w-full"
        >
          <Panel header={<span className="text-[#F37975] text-xl font-semibold">What meal plans do you offer?</span>} key="1">
            <p className="font-body text-gray-700 mt-2 pl-4 text-lg">
              We offer a variety of meal plans including Keto, Vegan, Gluten-Free, and Family-Friendly options. Each plan is customizable to suit your specific dietary preferences.
            </p>
          </Panel>

          <Panel header={<span className="text-[#F37975] text-xl font-semibold">Can I customize my meal preferences?</span>} key="2">
            <p className="font-body text-gray-700 mt-2 pl-4 text-lg">
              Yes! You can easily set your dietary preferences and update them as needed. Our platform ensures that the meals you receive align with your tastes and nutritional needs.
            </p>
          </Panel>

          <Panel header={<span className="text-[#F37975] text-xl font-semibold">How long does it take to receive my meals?</span>} key="3">
            <p className="font-body text-gray-700 mt-2 pl-4 text-lg">
              Meals are typically delivered within 3-5 business days for domestic orders. For international orders, shipping may take up to 7-14 business days. Expedited shipping options are also available.
            </p>
          </Panel>

          <Panel header={<span className="text-[#F37975] text-xl font-semibold">Do you offer refunds or exchanges?</span>} key="4">
            <p className="font-body text-gray-700 mt-2 pl-4 text-lg">
              Yes, we offer a 30-day return policy. If you’re not satisfied with a meal, you can return it for a full refund or exchange it for a different meal option.
            </p>
          </Panel>

          <Panel header={<span className="text-[#F37975] text-xl font-semibold">What payment methods are accepted?</span>} key="5">
            <p className="font-body text-gray-700 mt-2 pl-4 text-lg">
              We accept all major credit cards, PayPal, mobile payments, and bank transfers. For more details, please visit our payment options page.
            </p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default FAQ;
