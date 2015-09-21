//-- copyright
// OpenProject is a project management system.
// Copyright (C) 2012-2015 the OpenProject Foundation (OPF)
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License version 3.
//
// OpenProject is a fork of ChiliProject, which is a fork of Redmine. The copyright follows:
// Copyright (C) 2006-2013 Jean-Philippe Lang
// Copyright (C) 2010-2013 the ChiliProject Team
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
//
// See doc/COPYRIGHT.rdoc for more details.
//++

module.exports = function(HALAPIResource, $http, PathHelper){

  var ActivityService = {
    createComment: function(workPackage, activities, descending, comment) {
      var options = {
        ajax: {
          method: "POST",
          data: JSON.stringify({ comment: comment }),
          contentType: "application/json; charset=utf-8"
        }
      };

      return workPackage.links.addComment.fetch(options);
    },

    updateComment: function(activity, comment) {
      var options = {
        ajax: {
          method: 'PATCH',
          data: JSON.stringify({ comment: comment }),
          contentType: "application/json; charset=utf-8"
        }
      };

      return activity.links.update.fetch(options).then(function(activity){
        return activity;
      });
    },

    isInitialActivity: function(activities, activity, activityNo, activitiesSortedInDescendingOrder) {
      var type = activity.props._type;


      // Type must be Activity
      if (type.indexOf('Activity') !== 0) {
        return false;
      }

      // Shortcut, activityNo is 1 and its an Activity
      if (activityNo === 1) {
        return true;
      }

      // Otherwise, the current acitity may be initial if ALL other preceding activites are
      // other types.
      while (--activityNo > 0) {
        var index = (activitiesSortedInDescendingOrder ?
                      activities.length - activityNo : activityNo - 1);

        if (activities[index].props._type.indexOf('Activity') === 0) {
          return false;
        }
      }

      return true;
    }
  };

  return ActivityService;
};
