
import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
