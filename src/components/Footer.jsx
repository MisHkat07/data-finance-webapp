import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          Data<span className="text-[#eeefff]">Finance</span>
        </h1>
        <p className="py-4 text-[#eeefff]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm text-[#eeefff]">Analytics</li>
            <li className="py-2 text-sm text-[#eeefff]">Marketing</li>
            <li className="py-2 text-sm text-[#eeefff]">Commerce</li>
            <li className="py-2 text-sm text-[#eeefff]">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm text-[#eeefff]">Pricing</li>
            <li className="py-2 text-sm text-[#eeefff]">Documentation</li>
            <li className="py-2 text-sm text-[#eeefff]">Guides</li>
            <li className="py-2 text-sm text-[#eeefff]">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm text-[#eeefff]">About</li>
            <li className="py-2 text-sm text-[#eeefff]">Blog</li>
            <li className="py-2 text-sm text-[#eeefff]">Jobs</li>
            <li className="py-2 text-sm text-[#eeefff]">Press</li>
            <li className="py-2 text-sm text-[#eeefff]">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm text-[#eeefff]">Claim</li>
            <li className="py-2 text-sm text-[#eeefff]">Policy</li>
            <li className="py-2 text-sm text-[#eeefff]">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
