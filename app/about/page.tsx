import React, { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const About = () => {
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBio = async () => {
      try {
        const bioRef = doc(db, 'bio', 'sophim');
        const snap = await getDoc(bioRef);
        if (snap.exists()) {
          setBio(snap.data());
        }
      } catch (e) {
        console.error('Error loading bio', e);
      } finally {
        setLoading(false);
      }
    };
    fetchBio();
  }, []);

  if (loading) return <div className="glass p-8">Loading…</div>;
  if (!bio) return <div className="glass p-8">No bio data found.</div>;

  return (
    <section className="glass p-8 max-w-3xl mx-auto mt-12">
      <h1 className="text-3xl font-bold mb-4">{bio.name}</h1>
      <p className="mb-2"><strong>Born:</strong> {bio.birthDate}</p>
      <p className="mb-2"><strong>Education:</strong> {bio.education}</p>
      <p className="mb-2"><strong>Experience:</strong> {bio.experience}</p>
    </section>
  );
};

export default About;
