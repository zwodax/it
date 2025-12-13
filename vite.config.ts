import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      'sysdesign.online',
      'www.sysdesign.online',
      'localhost',
      '146.190.26.79',
      '143.198.251.241'
    ],
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    // Custom plugin for API routes
    {
      name: 'api-routes',
      configureServer(server) {
        server.middlewares.use('/api/send-enrollment', async (req, res, next) => {
          try {
            const { handleEnrollment } = await import('./server/api.js');
            await handleEnrollment(req, res);
          } catch (error) {
            console.error('API Error:', error);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Internal server error' }));
          }
        });

        server.middlewares.use('/api/send-contact', async (req, res, next) => {
          try {
            const { handleContact } = await import('./server/api.js');
            await handleContact(req, res);
          } catch (error) {
            console.error('API Error:', error);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Internal server error' }));
          }
        });
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
