﻿/*****************************************************************************
 * Project: Open Electronic Healthcare System
 * Group: Ghana Team
 * Date: 23-Jan-2011
 * 
 * Author: Matthew Kimber (matthew.kimber@gmail.com)
 *****************************************************************************/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using OpenEhs.Domain;

namespace OpenEhs.Data
{
    public class StaffRepository : IStaffRepository
    {
        public Staff Get(int id)
        {
            throw new NotImplementedException();
        }

        public IList<Staff> GetAll()
        {
            throw new NotImplementedException();
        }

        public void Add(Staff entity)
        {
            throw new NotImplementedException();
        }

        public void Remove(Staff entity)
        {
            throw new NotImplementedException();
        }

        public IQueryable<Staff> Find(Expression<Func<Staff, bool>> predicate)
        {
            throw new NotImplementedException();
        }
    }
}