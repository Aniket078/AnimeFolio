const BASE_URL = 'https://web-production-84447.up.railway.app';

export const fetchPlayerData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/player/`);
    if (!response.ok) throw new Error('Failed to fetch player data');
    return await response.json();
  } catch (error) {
    console.error('Error fetching player data:', error);
    return null;
  }
};

export const fetchSkillsData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/skills/`);
    if (!response.ok) throw new Error('Failed to fetch skills data');
    return await response.json();
  } catch (error) {
    console.error('Error fetching skills data:', error);
    return null;
  }
};