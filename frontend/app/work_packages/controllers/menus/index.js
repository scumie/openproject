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


angular.module('openproject.workPackages')
  .factory('ColumnContextMenu', [
    'ngContextMenu',
    function(ngContextMenu) {
      return ngContextMenu({
        controller: 'ColumnContextMenuController',
        controllerAs: 'contextMenu',
        templateUrl: '/templates/work_packages/menus/column_context_menu.html',
        container: '.work-packages--list-table-area'
      });
    }
  ])
  .controller('ColumnContextMenuController', [
    '$scope',
    'ColumnContextMenu',
    'I18n',
    'QueryService',
    'WorkPackagesTableHelper',
    'WorkPackagesTableService',
    'columnsModal',
    require('./column-context-menu-controller')
  ])
  .factory('ShowMoreDropdownMenu', [
    'ngContextMenu',
    function(ngContextMenu) {
      return ngContextMenu({
        templateUrl: '/templates/work_packages/menus/show_more_dropdown_menu.html',
        container: '#action-show-more-dropdown-menu'
      });
    }
  ])
  .factory('SettingsDropdownMenu', [
    'ngContextMenu',
    function(ngContextMenu) {
      return ngContextMenu({
        controller: 'SettingsDropdownMenuController',
        templateUrl: '/templates/work_packages/menus/settings_dropdown_menu.html',
        container: '.toolbar'
      });
    }
  ])
  .controller('SettingsDropdownMenuController', [
    '$scope',
    'I18n',
    'columnsModal',
    'exportModal',
    'saveModal',
    'settingsModal',
    'shareModal',
    'sortingModal',
    'groupingModal',
    'QueryService',
    'AuthorisationService',
    '$window',
    '$state',
    '$timeout',
    'NotificationsService',
    require('./settings-dropdown-menu-controller')
  ])
  .factory('TasksDropdownMenu', [
    'ngContextMenu',
    function(ngContextMenu) {
      return ngContextMenu({
        templateUrl: '/templates/work_packages/menus/tasks_dropdown_menu.html',
        container: '.toolbar'
      });
    }
  ])
  .constant('PERMITTED_CONTEXT_MENU_ACTIONS', [
    'edit', 'watch', 'log_time',
    'duplicate', 'move', 'copy', 'delete'
  ])
  .factory('WorkPackageContextMenu', [
    'ngContextMenu',
    function(ngContextMenu) {
      return ngContextMenu({
        controller: 'WorkPackageContextMenuController',
        controllerAs: 'contextMenu',
        templateUrl: '/templates/work_packages/menus/work_package_context_menu.html'
      });
    }
  ])
  .controller('WorkPackageContextMenuController', [
    '$scope',
    'WorkPackagesTableHelper',
    'WorkPackageContextMenuHelper',
    'WorkPackageService',
    'WorkPackagesTableService',
    'I18n',
    '$window',
    'PERMITTED_CONTEXT_MENU_ACTIONS',
    require('./work-package-context-menu-controller')
  ])
  .factory('DetailsMoreDropdownMenu', [
    'ngContextMenu',
    function(ngContextMenu) {
      return ngContextMenu({
        templateUrl: '/templates/work_packages/menus/details_more_dropdown_menu.html',
        container: '.work-packages--details-toolbar'
      });
    }
  ])
  .factory('QuerySelectDropdownMenu', [
    'ngContextMenu',
    function(ngContextMenu) {
      return ngContextMenu({
        templateUrl: '/templates/work_packages/menus/query_select_dropdown_menu.html',
        container: '.title-container',
        controller: 'QuerySelectDropdownMenuController'
      });
    }
  ])
  .controller('QuerySelectDropdownMenuController', [
    '$scope',
    '$sce', 'LABEL_MAX_CHARS', 'KEY_CODES',
    require('./query-select-dropdown-menu-controller')
  ]);
