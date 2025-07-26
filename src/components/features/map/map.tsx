import  { useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Box, Typography, MenuItem, Select } from '@mui/material';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import PageContainer from '../../layouts/pageContainer';
import Breadcrumb from '../../common/breadCrumbs';

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const items = [
  {
    itemId: 'itm001',
    lat: 28.4595,
    lng: 77.0266,
    address: 'Block A, Sector 45',
    name: 'Cordless Drill',
    category: 'Tools',
  },
  {
    itemId: 'itm002',
    lat: 28.4652,
    lng: 77.0565,
    address: 'Block B, Sector 50',
    name: 'Camping Tent',
    category: 'Outdoors',
  },
];

const categories = ['All', ...new Set(items.map((item) => item.category))];

const MapView = () => {
  const [filter, setFilter] = useState('All');

  const filteredItems =
    filter === 'All' ? items : items.filter((item) => item.category === filter);

  const breadcrumbItems = [
    { title: "Home", url: "/" },
    { title: "Map View" },
  ];

  return (
    <PageContainer>
      <Breadcrumb items={breadcrumbItems} />
    <Box sx={{ height: '100vh', width: '100%', p: 2 }}>
      <Typography variant="h5" mb={2}>
        Nearby Items
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Select value={filter} onChange={(e) => setFilter(e.target.value)} size="small">
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <MapContainer
        center={[28.462, 77.04]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: '80vh', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredItems.map((item) => (
          <Marker key={item.itemId} position={[item.lat, item.lng]}>
            <Popup>
              <Typography variant="subtitle1" fontWeight="bold">
                {item.name}
              </Typography>
              <Typography variant="body2">Category: {item.category}</Typography>
              <Typography variant="body2" gutterBottom>
                {item.address}
              </Typography>
              <a href={`/items/${item.itemId}`}>View Details</a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>        
    </PageContainer>

  );
};

export default MapView;
