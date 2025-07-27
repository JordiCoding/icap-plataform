// 🔒 Banking Grade Security Configuration for Strapi
// ICAP Banking Platform - Security Settings

module.exports = {
  // Authentication Configuration
  auth: {
    secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production',
    options: {
      expiresIn: '1h', // Short token lifetime for banking security
      issuer: 'icap-banking-platform',
      audience: 'icap-frontend',
      algorithm: 'HS256'
    }
  },

  // CORS Configuration - Restrictive for banking
  cors: {
    enabled: true,
    origin: [
      'https://icap-bank.com',
      'https://www.icap-bank.com',
      'https://admin.icap-bank.com'
    ],
    credentials: true,
    headers: [
      'Content-Type',
      'Authorization',
      'X-Requested-With',
      'Accept',
      'Origin'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    maxAge: 86400 // 24 hours
  },

  // Rate Limiting - Prevent abuse
  rateLimit: {
    enabled: true,
    max: 100, // requests per window
    windowMs: 15 * 60 * 1000, // 15 minutes
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false
  },

  // Security Headers
  security: {
    // Content Security Policy
    contentSecurityPolicy: {
      enabled: true,
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'"],
        imgSrc: ["'self'", "data:", "https:"],
        connectSrc: ["'self'"],
        fontSrc: ["'self'"],
        objectSrc: ["'none'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'none'"]
      }
    },

    // XSS Protection
    xss: {
      enabled: true,
      mode: 'block'
    },

    // Frame Options
    frameOptions: {
      enabled: true,
      value: 'SAMEORIGIN'
    },

    // Content Type Options
    contentTypeOptions: {
      enabled: true
    },

    // Referrer Policy
    referrerPolicy: {
      enabled: true,
      value: 'strict-origin-when-cross-origin'
    }
  },

  // Database Security
  database: {
    client: 'postgresql',
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT || 5432,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      ssl: {
        rejectUnauthorized: false,
        ca: process.env.DATABASE_SSL_CA,
        cert: process.env.DATABASE_SSL_CERT,
        key: process.env.DATABASE_SSL_KEY
      }
    },
    pool: {
      min: 2,
      max: 10,
      acquireTimeoutMillis: 30000,
      createTimeoutMillis: 30000,
      destroyTimeoutMillis: 5000,
      idleTimeoutMillis: 30000,
      reapIntervalMillis: 1000,
      createRetryIntervalMillis: 100
    }
  },

  // Admin Panel Security
  admin: {
    auth: {
      secret: process.env.ADMIN_JWT_SECRET || 'your-admin-jwt-secret-change-this',
      options: {
        expiresIn: '2h',
        issuer: 'icap-admin',
        audience: 'icap-admin-panel'
      }
    },
    url: '/admin',
    serveAdminPanel: true,
    forgotPassword: {
      enabled: true,
      config: {
        from: 'noreply@icap-bank.com',
        replyTo: 'support@icap-bank.com'
      }
    }
  },

  // API Security
  api: {
    rest: {
      enabled: true,
      prefix: '/api',
      defaultLimit: 25,
      maxLimit: 100,
      withCount: true
    },
    graphql: {
      enabled: false, // Disable GraphQL for banking security
      config: {
        defaultLimit: 100,
        maxLimit: 1000,
        apolloServer: {
          tracing: false,
          introspection: false
        }
      }
    }
  },

  // Logging Configuration
  logger: {
    level: 'info',
    requests: true,
    errors: true,
    warnings: true
  },

  // File Upload Security
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 10 * 1024 * 1024, // 10MB limit
        allowedTypes: [
          'image/jpeg',
          'image/png',
          'image/gif',
          'image/webp',
          'application/pdf',
          'text/plain'
        ]
      }
    }
  },

  // Session Security
  session: {
    enabled: true,
    client: 'redis',
    prefix: 'strapi:sess:',
    ttl: 86400, // 24 hours
    rolling: false,
    secretKeys: [process.env.SESSION_SECRET || 'your-session-secret']
  },

  // Middleware Security
  middlewares: [
    'strapi::logger',
    'strapi::errors',
    'strapi::security',
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
    {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'connect-src': ["'self'", 'https:'],
            'img-src': ["'self'", 'data:', 'blob:', 'https:'],
            'media-src': ["'self'"],
            'frame-src': ["'self'"],
            'object-src': ["'none'"],
            'upgrade-insecure-requests': []
          }
        },
        frameguard: false,
        hsts: {
          maxAge: 31536000,
          includeSubDomains: true
        }
      }
    }
  ],

  // Environment-specific configurations
  env: {
    development: {
      // Development-specific security settings
      cors: {
        origin: ['http://localhost:3000', 'http://localhost:5173']
      }
    },
    production: {
      // Production-specific security settings
      cors: {
        origin: ['https://icap-bank.com', 'https://www.icap-bank.com']
      }
    }
  }
}; 