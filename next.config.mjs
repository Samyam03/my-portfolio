/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/Samyam_Bhattarai_Resume.pdf',
        headers: [
          { key: 'Content-Type', value: 'application/pdf' },
          {
            key: 'Content-Disposition',
            value: 'inline; filename="Samyam_Bhattarai_Resume.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
