import React from 'react';

const UserAgreementModal = ({ onAccept }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-lg mx-auto text-center">
        <h2 className="text-xl font-bold mb-4">Diclaimer</h2>
        <p className="mb-6">
        The Bar Council of India does not permit advertisement or solicitation by advocates. By accessing this website (https://www.maheshwariandco.com/), you acknowledge and confirm that you are seeking information relating to Maheshwari & Co., Advocates and Legal Consultants (hereinafter referred to as “Maheshwari & Co.”), of your own accord and that there has been no form of solicitation, advertisement, or inducement by Maheshwari & Co., or its members.The content of this website is for informational purposes only and should not be interpreted as soliciting or advertising. No material/information provided on this website should be construed as legal advice. Maheshwari & Co. shall not be liable for the consequences of any action taken by relying on the material/information provided on this website.
        </p>
        <button
          onClick={onAccept}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default UserAgreementModal;
