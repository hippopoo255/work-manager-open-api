window.onload = function() {
  
      
      
      
      //<editor-fold desc="Changeable Configuration Block">
      window.ui = SwaggerUIBundle({
        "dom_id": "#swagger-ui",
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout",
        queryConfigEnabled: false,
        url: "/schema/stg/openapi.app.yaml",
      })
      
      //</editor-fold>




};
