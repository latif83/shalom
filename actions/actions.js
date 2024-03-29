"use server";
import prisma from "@/config/prisma";

export const getCounts = async () => {
  const pastorsCount = await prisma.shalom_pastors.count();
  const membersCount = await prisma.shalom_members.count();
  const eventsCount = await prisma.shalom_events.count();

  // console.log({ pastorsCount, membersCount, eventsCount });

  return {
    pastorsCount,
    membersCount,
    eventsCount,
  };
};

export const addPastor = async (formData) => {
  let { f_name, l_name, title, email, address, contact } = formData;
  const createPastor = await prisma.shalom_pastors.create({
    data: {
      f_name: f_name,
      l_name: l_name,
      title: title,
      email: email,
      address: address,
      contact: contact,
    },
  });
  if (createPastor) {
    return {
      status: true,
      msg: "New Pastor added successfully",
    };
  } else {
    return {
      status: false,
      msg: "Error adding data",
    };
  }
};

export const editPastor = async (formData) => {
  try {
    let { id, f_name, l_name, title, email, address, contact } = formData;

    // Update the pastor using the provided ID
    const updatedPastor = await prisma.shalom_pastors.update({
      where: {
        id: id,
      },
      data: {
        f_name: f_name,
        l_name: l_name,
        title: title,
        email: email,
        address: address,
        contact: contact,
      },
    });

    if (updatedPastor) {
      return {
        status: true,
        msg: "Pastor updated successfully",
      };
    } else {
      return {
        status: false,
        msg: "Error updating pastor",
      };
    }
  } catch (error) {
    console.error("Error editing pastor:", error);
    return {
      status: false,
      msg: "Error editing pastor",
    };
  }
};

export const getPastors = async () => {
  const pastors = await prisma.shalom_pastors.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  if (pastors) {
    return {
      status: true,
      msg: "Pastors retrieved successfully",
      pastors,
    };
  } else {
    return {
      status: false,
      msg: "Error getting pastors",
    };
  }
};

export const addMember = async (formData) => {
  let { f_name, l_name, title, email, address, contact } = formData;
  const createMember = await prisma.shalom_members.create({
    data: {
      f_name: f_name,
      l_name: l_name,
      title: title,
      email: email,
      address: address,
      contact: contact,
    },
  });
  if (createMember) {
    return {
      status: true,
      msg: "New Member added successfully",
    };
  } else {
    return {
      status: false,
      msg: "Error adding data",
    };
  }
};

export const editMember = async (formData) => {
  try {
    let { id, f_name, l_name, title, email, address, contact } = formData;

    // Update the pastor using the provided ID
    const updatedMember = await prisma.shalom_members.update({
      where: {
        id: id,
      },
      data: {
        f_name: f_name,
        l_name: l_name,
        title: title,
        email: email,
        address: address,
        contact: contact,
      },
    });

    if (updatedMember) {
      return {
        status: true,
        msg: "Member updated successfully",
      };
    } else {
      return {
        status: false,
        msg: "Error updating member",
      };
    }
  } catch (error) {
    console.error("Error editing member:", error);
    return {
      status: false,
      msg: "Error editing member",
    };
  }
};

export const getMembers = async () => {
  const members = await prisma.shalom_members.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  if (members) {
    return {
      status: true,
      msg: "Members retrieved successfully",
      members,
    };
  } else {
    return {
      status: false,
      msg: "Error getting members",
    };
  }
};

export const addEvent = async (formData) => {
  let { title, des, sDate, eDate, imageUrl } = formData;
  const createEvent = await prisma.shalom_events.create({
    data: {
      title,
      des,
      sDate: new Date(sDate).toISOString(),
      eDate: new Date(eDate).toISOString(),
      imageUrl,
    },
  });
  if (createEvent) {
    return {
      status: true,
      msg: "New Event added successfully",
    };
  } else {
    return {
      status: false,
      msg: "Error adding data",
    };
  }
};

export const editEvent = async (formData) => {
  try {
    let { id, title, des, sDate, eDate, imageUrl } = formData;

    // Update the event using the provided ID
    const updatedEvent = await prisma.shalom_events.update({
      where: {
        id: id,
      },
      data: {
        title,
        des,
        sDate: new Date(sDate).toISOString(),
        eDate: new Date(eDate).toISOString(),
        imageUrl,
      },
    });

    if (updatedEvent) {
      return {
        status: true,
        msg: "Event updated successfully",
      };
    } else {
      return {
        status: false,
        msg: "Error updating event",
      };
    }
  } catch (error) {
    console.error("Error editing event:", error);
    return {
      status: false,
      msg: "Error editing event",
    };
  }
};

export const getEvents = async () => {
  const events = await prisma.shalom_events.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  if (events) {
    return {
      status: true,
      msg: "Events retrieved successfully",
      events,
    };
  } else {
    return {
      status: false,
      msg: "Error getting events",
    };
  }
};

export const getCEvents = async () => {
  const events = await prisma.shalom_events.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  if (events) {
    return {
      status: true,
      msg: "Events retrieved successfully",
      events,
    };
  } else {
    return {
      status: false,
      msg: "Error getting events",
    };
  }
};

export const deleteRecordBySection = async (section, sectionId) => {
  try {
    let deleteResult;
    switch (section) {
      case 'pastor':
        deleteResult = await prisma.shalom_pastors.delete({
          where: { id: sectionId }
        });
        break;
      case 'member':
        deleteResult = await prisma.shalom_members.delete({
          where: { id: sectionId }
        });
        break;
      case 'event':
        deleteResult = await prisma.shalom_events.delete({
          where: { id: sectionId }
        });
        break;
      default:
        throw new Error('Invalid section provided');
    }

    if (deleteResult) {
      return {
        status: true,
        msg: `${section} deleted successfully`,
      };
    } else {
      return {
        status: false,
        msg: `Error deleting record from ${section}`,
      };
    }
  } catch (error) {
    console.error(`Error deleting record from ${section}:`, error);
    return {
      status: false,
      msg: `Error deleting record from ${section}`,
    };
  }
};

