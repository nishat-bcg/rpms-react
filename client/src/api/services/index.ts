import AxiosHandler from 'src/api/axios';

const api = AxiosHandler.api;

// Fetching calendars data
export async function getAllCalendarsData() {
  return await api.get('/api/v1/calendars');
}

// Fetching campaignMatrix
export async function getCampaignMatrix() {
  return await api.get('/api/v1/campaign-matrix');
}

// Fetching detailed table
export async function getDetailedTable() {
  return await api.get('/api/v1/detailed-table');
}

// Dropdown data for calendar
export async function getReferenceCalendar() {
  return await api.get('/api/v1/reference-calendars');
}

// Dropdown data for products
export async function getProducts() {
  return await api.get('/api/v1/products');
}
