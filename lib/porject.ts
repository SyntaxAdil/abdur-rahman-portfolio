// import project from "@/data/project.json"

export const getProject = async () => {
  const res = await fetch(
    `https://app-portfolio-manager.vercel.app/api/project/${process.env.PM_USER_ID}`,
    { next: { revalidate: 60 } },
  );
  const data = await res.json();
  console.log(data.data);
  return data.data.sort(
    (
      a: { isFeatured: boolean; createdAt: string },
      b: { isFeatured: boolean; createdAt: string },
    ) => {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;

      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    },
  );
};


export const getProjectById = async (id: string) => {
  try {
    const res = await fetch(
      `https://app-portfolio-manager.vercel.app/api/project/${process.env.PM_USER_ID}`,
      { next: { revalidate: 60 } },
    );
    const data = await res.json();
    
    // Find the specific project by id from the full project list
    const project = data.data.find(
      (item: { _id?: string; id?: string }) => item._id === id || item.id === id
    );

    return project || null;
  } catch (error) {
    console.error("Failed to fetch project by ID:", error);
    return null;
  }
};