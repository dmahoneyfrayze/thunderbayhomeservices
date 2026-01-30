import { useEffect } from 'react';

interface FrayzeWidgetProps {
  widgetKey: string;
}

const FrayzeWidget: React.FC<FrayzeWidgetProps> = ({ widgetKey }) => {
  useEffect(() => {
    if (!document.getElementById('frayze-widget-script')) {
      const script = document.createElement('script');
      script.id = 'frayze-widget-script';
      script.src = 'https://app.frayze.ai/widget.js';
      script.async = true;
      script.setAttribute('data-widget-key', widgetKey);
      document.body.appendChild(script);
    }
  }, [widgetKey]);

  return <div id="frayze-widget" style={{ width: '100%', minHeight: '600px' }} />;
};

export default FrayzeWidget;
